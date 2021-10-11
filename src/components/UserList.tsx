import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../store";
import { IUser } from "../store/UserStore";
import Button from "./ui/Button";
import UserProfile from "./UserProfile";

function UserList() {
	const { users, isLoading, fetchUsers, updateUser, addUser } =
		useStore().userStore;

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const onUserChange = (user: IUser) => {
		updateUser(user);
	};

	const onAddUser = () => {
		addUser({
			fullName: 'New User',
			profilePicUrl: '',
			email: '',
			address: '',
			phoneNo: '',
			website: '',
			companyName: '',
			companyDesc: '',
		});
	}

	if (isLoading) {
		return <div>Loading results...</div>;
	}

	return (
		<div>
			<div className="mb-3">
				<Button variant="add" onClick={onAddUser}>Add user</Button>
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
