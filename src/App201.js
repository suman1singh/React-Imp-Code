// Display array of users to browser:
import React from "react";

export default function App201() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 },
  ];
  const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <div>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </div>
  );
}
