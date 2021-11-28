import axios from "axios";

export const apiUrls = {
	login: `/login`,
};

const createAxiosInstance = (baseUrl: string) => {
	const instance = axios.create({
		baseURL: baseUrl,
	});

	instance.interceptors.request.use(
		(config) => {
			console.log(config);
			// const authData = localStorage.getItem("token:auth");
			// const authLocalStorage = authData ? JSON.parse(authData) : null;

			// if (authLocalStorage && authLocalStorage.token) {
			// 	config.headers.authorization = `Bearer ${authLocalStorage.token}`;
			// }

			return config;
		},
		(error) => {
			console.error("Request error: ", error);
		}
	);

	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response.status === 401) {
				localStorage.removeItem("token:auth");
				if (error.response.config.url !== apiUrls.login) {
					window.location.reload();
				}
			}

			return Promise.reject(error);
		}
	);

	return instance;
};

export const getResponseErrors = (error: any) => {
	if (error && error.response && error.response.data) {
		return error.response.data;
	}
	return ["An Unexpected error has occurred. Please try again later."];
};

export const axiosInstance = createAxiosInstance(
	process.env.API_URL || "http://localhost:5001"
);

export default axiosInstance;
