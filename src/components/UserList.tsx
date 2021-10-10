import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../store";
import { IUser } from "../store/UserStore";
import UserProfile from "./UserProfile";

function UserList() {
  const { users, isLoading, fetchUsers, updateUser } = useStore().userStore;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onUserChange = (user: IUser) => {
    updateUser(user);
  };

  if (isLoading) {
    return <div>Loading results...</div>;
  }

  return (
    <div className="flex flex-col space-y-10">
      {users.map((user) => (
        <UserProfile key={user.id} user={user} onUserChange={onUserChange} />
      ))}
    </div>
  );
}

export default observer(UserList);
