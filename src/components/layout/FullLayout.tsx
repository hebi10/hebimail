import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const FullLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Full Layout Footer</footer>
    </div>
  );
};

export default FullLayout;
