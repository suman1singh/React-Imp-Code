import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail219() {
  const location = useLocation();
  console.log(location.state);
  const id = location.state.id;
  const [userData, setUserData] = React.useState({});

  const getUserData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  React.useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>{location.state.id}</h1>
      <div>
        <table className="table table-striped table-sm">
          <thead className="thead-light">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.id}</td>
              <td>{userData.name}</td>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
              <td>{userData.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
