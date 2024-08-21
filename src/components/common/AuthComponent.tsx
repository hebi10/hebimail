import React, { useState, ChangeEvent } from 'react';
import { login, logout } from '../../services/api';

const AuthComponent: React.FC = () => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    login(credentials);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
    </div>
  );
};

export default AuthComponent;
