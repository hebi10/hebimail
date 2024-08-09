import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';

const UserLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>User Layout Footer</footer>
    </div>
  );
};

export default UserLayout;
