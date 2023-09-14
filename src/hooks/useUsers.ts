import { useEffect, useState } from "react";
import userService, { UsersData } from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<UsersData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const { request } = userService.getAll<UsersData>();
      request.then((res) => setUsers(res.data));
    }
    fetchData();
  }, []);
  return { users };
};

export default useUsers;
