import axios from "axios";

export interface IUsers {
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
    return axios.get<IUsers[]>(this.url);
  }
}
