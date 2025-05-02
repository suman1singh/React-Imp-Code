import React from "react";
import { signOut } from "@aws-amplify/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/signin");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are signed in.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
