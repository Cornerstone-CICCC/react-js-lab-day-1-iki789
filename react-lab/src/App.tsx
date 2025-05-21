import { useState } from "react";
import "./App.css";
import { User } from "./User";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      fullname: "John Doe",
      age: 30,
      gender: "M",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      education: "Bachelor's Degree",
      skills: ["JavaScript", "React"],
    },
  ]);

  const handleUserSave = (updatedUser: User) => {
    setUsers((prevUsers) => [...prevUsers, updatedUser]);
  };
  const handleUserDelete = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };
  // const handleUserView = (userId: string) => {
  //   const user = users.find((user) => user.id === userId);
  // };

  return (
    <>
      <div>
        <UserForm onUserSave={handleUserSave} />
        <UserList users={users} onDelete={handleUserDelete} />
      </div>
    </>
  );
}

export default App;
