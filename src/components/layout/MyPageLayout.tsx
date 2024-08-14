import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import Footer from '../global/Footer';

const MyPageLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyPageLayout;
