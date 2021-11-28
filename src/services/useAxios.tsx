import { Reducer, useEffect, useReducer, useState } from "react";
import axiosInstance from "./axios-http";

const enum Actions {
	LOADING = "loading",
	ERROR = "error",
	DONE = "DONE",
}

type ActionType<T> =
	| { type: Actions.LOADING }
	| { type: Actions.ERROR; error: any }
	| { type: Actions.DONE; response: T };

const initialData = {
	isLoading: false,
	error: null,
	response: null,
};

interface State<T> {
	isLoading: boolean;
	error: any;
	response: T | null;
}

const axiosReducer = <T extends any>(
	state: State<T>,
	action: ActionType<T>
): State<T> => {
	switch (action.type) {
		case Actions.LOADING: {
			return {
				...state,
				isLoading: true,
			};
		}
		case Actions.ERROR: {
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		}
		case Actions.DONE: {
			return {
				error: null,
				response: action.response,
				isLoading: false,
			};
		}
		default: {
			throw Error("Unknown action: " + action);
		}
	}
};

const useAxios = <T extends any>(url: string): State<T> => {
	const [data, dispatch] = useReducer<Reducer<State<T>, ActionType<T>>>(
		axiosReducer,
		initialData
	);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: Actions.LOADING });
			try {
				const res = await axiosInstance.get(url);
				const json = await res.data;
				dispatch({ type: Actions.DONE, response: json });
			} catch (err) {
				console.log("Axios error hand", err);
				dispatch({ type: Actions.ERROR, error: err });
			}
		};
		fetchData();
	}, []);

	return data;
};

export default useAxios;
