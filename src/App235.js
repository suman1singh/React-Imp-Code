// Login Endpoint: https://api.escuelajs.co/api/v1/auth/login
// Profile Endpoint: https://api.escuelajs.co/api/v1/auth/profile
// Credentials:
// email: 'john@mail.com',
// password: 'changeme',
// Upon successful login, the API returns an access_token and a refresh_token.
// You can use the access_token to access protected routes.

import axios from "axios";
import React, { useState } from "react";

const App235 = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userNameError: "",
    passwordError: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((res) => ({
      ...res,
      [name]: value,
    }));
    if (formData.username !== "") {
      setFormData((res) => ({
        ...res,
        userNameError: "",
      }));
    }
    if (formData.password !== "") {
      setFormData((res) => ({
        ...res,
        passwordError: "",
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    if (formData.username !== "" && formData.password !== "") {
      try {
        let res = await axios.post(
          `https://api.escuelajs.co/api/v1/auth/login`,
          {
            email: formData.username,
            password: formData.password,
          }
        );
        sessionStorage.setItem("token", res.data.access_token);
        setFormData({
          username: "",
          password: "",
        });
        setIsLoggedIn(true);
        console.log("logged in successfully", res);
      } catch (err) {
        console.log("Login failed", err);
      }
    } else {
      if (formData.username === "") {
        setFormData((res) => ({
          ...res,
          userNameError: "User name is required",
        }));
      }
      if (formData.password === "") {
        setFormData((res) => ({
          ...res,
          passwordError: "Password is required",
        }));
      }
    }
  };

  const getData = async () => {
    let token = sessionStorage.getItem("token");
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("user data:", res.data);
      setUserData(res.data);
    } catch (err) {
      console.log("Error in retriving data");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <p>Login form</p>
          <label>
            User Name:
            <input
              value={formData.username}
              onChange={handleFormData}
              type="text"
              name="username"
              placeholder="Enter user name"
            />
            <span>
              {formData.userNameError && <p>{formData.userNameError}</p>}
            </span>
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              value={formData.password}
              onChange={handleFormData}
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <span>
              {formData.passwordError && <p>{formData.passwordError}</p>}
            </span>
          </label>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>User Logged In successfully</p>
          <button onClick={getData}>
            Click here to get user data after successful login
          </button>
          {userData && (
            <ul>
              <li>{userData.name}</li>
              <li>{userData.email}</li>
              <li>{userData.role}</li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default App235;
