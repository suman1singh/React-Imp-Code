import React, { useState } from "react";
import { signUp } from "@aws-amplify/auth";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await signUp({
        username: form.username,
        password: form.password,
        options: { userAttributes: { email: form.email } },
      });
      alert("Sign up successful! Please confirm your email.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUp;
