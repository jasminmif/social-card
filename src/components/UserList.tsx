import { useEffect, useState } from "react";
import UserService, { IUser } from "../util/userService";
import UserProfile from "./UserProfile";

const userService = new UserService();

export default function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await userService.fetchUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const onUserChange = (user: IUser) => {
    console.log("USER HERE", user)
  }

  return (
    <div className="flex flex-col space-y-10">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          user={user}
          onUserChange={onUserChange}
        />
      ))}
    </div>
  );
}
