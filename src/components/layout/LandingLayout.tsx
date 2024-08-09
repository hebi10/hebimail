import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';

const LandingLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Landing Layout Footer</footer>
    </div>
  );
};

export default LandingLayout;
