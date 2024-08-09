import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import styles from './FullLayout.module.css';

const FullLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer>Full Layout Footer</footer>
    </div>
  );
};

export default FullLayout;
