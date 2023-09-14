import create from "./http-service";

// Using generic HTTP
export interface UsersData {
  id: number;
  name: string;
}

export default create("https://jsonplaceholder.typicode.com/users");
