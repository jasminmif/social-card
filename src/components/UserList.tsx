import { useEffect, useState } from "react";
import UserService, { IUsers } from "../util/userService";
import UserProfile from "./UserProfile";

const userService = new UserService();

export default function UserList() {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await userService.fetchUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col space-y-10">
      {users.map((user) => (
        <UserProfile
          key={2}
          profilePictureUrl={user.profilePicUrl}
          fullName="Lois Zemlak"
          email="Maida.Becker98@gmail.com"
          address="Cremin Plains St, Apt.462, North Connortown, 99373"
          phoneNo="(293) 414-8005"
          website="marianne.org"
        />
      ))}
    </div>
  );
}
