import React, { useState } from 'react';
import { signIn } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await signIn({ username: form.username, password: form.password });
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
};

export default SignIn;