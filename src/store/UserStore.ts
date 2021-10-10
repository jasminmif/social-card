import axios from "axios";
import { cast, flow, types } from "mobx-state-tree";

export interface IUser {
  id: number;
  profilePicUrl: string;
  fullName: string;
  email: string;
  address: string;
  phoneNo: string;
  website: string;
  companyName: string;
  companyDesc: string;
}

export default class UserService {
  url = "https://my-json-server.typicode.com/jasminmif/social-card/users";

  fetchUsers() {
    return axios.get<IUser[]>(this.url);
  }
}

export const UserStore = types
  .model({
    users: types.array(types.frozen<IUser>()),
    isLoading: types.boolean,
  })
  .actions((self) => ({
    fetchUsers: flow(function* () {
      const userService = new UserService();

      self.isLoading = true;
      const { data } = yield userService.fetchUsers();
      self.users = data;
      self.isLoading = false;
    }),
    updateUser(userData: IUser) {
      const newUsers = self.users.map((user) => {
        if (user.id === userData.id) {
          return userData;
        }
        return user;
      });
      self.users = cast(newUsers);
    },
  }));
