import axios from "axios";
import useUsers from "./hooks/useusers";

function App() {
  const { users } = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
