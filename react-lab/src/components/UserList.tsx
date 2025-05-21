import React from "react";
import { User } from "../User";

type Props = {
  users: User[];
  onDelete: (userId: string) => void;
};

const UserList = ({ users, onDelete }: Props) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-item">
              <p>{user.fullname}</p>
              <button>View</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
