import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import useAxios from "../services/useAxios";
import { useStore } from "../store";
import { IUser } from "../store/UserStore";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { UserProfile } from "./UserProfile";

function UserList() {
	const { isLoading, error, response } = useAxios<IUser[]>(
		"https://my-json-server.typicode.com/jasminmif/social-card/users"
	);

	const { response: responseQuote } = useAxios<any>(
		"https://api.quotable.io/random"
	);

	if (isLoading) {
		return <Loader>Loading users...</Loader>;
	}

	if (error) {
		return (
			<div>
				Error while fetching data: {JSON.stringify(error?.message)}
			</div>
		);
	}
	const users = response;

	return (
		<div>
			<div className="mb-3">
				<Button variant="add" onClick={(e) => {}}>
					Add user
				</Button>
			</div>
			<div>{responseQuote?.content}</div>
			<div className="flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
				{users?.map((user) => (
					<UserProfile
						key={user.id}
						user={user}
						onUserChange={(e) => {}}
					/>
				))}
			</div>
		</div>
	);
}

export default observer(UserList);
