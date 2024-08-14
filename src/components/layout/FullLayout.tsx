import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import styles from './FullLayout.module.css';
import Footer from '../global/Footer';

const FullLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default FullLayout;
