import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MyPageLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>My Page Layout Footer</footer>
    </div>
  );
};

export default MyPageLayout;
