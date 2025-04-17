//A form that lets you log in with hardcoded credentials using Redux 
//Toolkit with Thunk for async logic.

//✅ Username: admin, Password: 1234 → success

//❌ Any other combo → failure with error message

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout } from '././redux_middleware/features/authSlice';

const App233 = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Redux Toolkit + Thunk Login</h2>

      {isAuthenticated ? (
        <>
          <p style={{ color: 'green' }}>✅ You are logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default App233;