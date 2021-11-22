import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";
import { useStore } from "../store";
import { IUser } from "../store/UserStore";
import Button from "./ui/Button";
import Loader from "./ui/Loader";
import { UserProfile } from "./UserProfile";

function UserList() {
	const { users, isLoading, fetchUsers, updateUser, addUser } =
		useStore().userStore;

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const onUserChange = useCallback(
		(user: IUser) => {
			updateUser(user);
		},
		[updateUser]
	);

	const onAddUser = () => {
		addUser({
			fullName: "New User",
			profilePicUrl: "",
			email: "",
			address: "",
			phoneNo: "",
			website: "",
			companyName: "",
			companyDesc: "",
		});
	};

	if (isLoading) {
		return <Loader>Loading users...</Loader>;
	}

	return (
		<div>
			<div className="mb-3">
				<Button variant="add" onClick={onAddUser}>
					Add user
				</Button>
			</div>
			<div className="flex flex-col space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
				{users.map((user) => (
					<UserProfile
						key={user.id}
						user={user}
						onUserChange={onUserChange}
					/>
				))}
			</div>
		</div>
	);
}

export default observer(UserList);
