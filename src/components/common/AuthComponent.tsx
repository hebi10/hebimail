import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/actions/authActions';
import { RootState, AppDispatch } from '../../store/store';

const AuthComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); 
  const { isAuthenticated, user, loading, error } = useSelector((state: RootState) => state.auth);
  
  const [credentials, setCredentials] = useState({ id: '', password: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(login(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.id}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={credentials.id}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
