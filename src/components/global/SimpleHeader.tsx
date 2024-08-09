import React, { useRef, useState } from 'react';
import styles from './SimpleHeader.module.css';
import Menu from './Menu';
import Search from './Search';

const SimpleHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Menu onClose={() => setShowMenu(false)} className={`${styles.menu} ${showMenu ? styles.menuVisible : ''}`} />
      <Search onClose={() => setShowSearch(false)} className={`${styles.search} ${showSearch ? styles.searchVisible : ''}`} />
      <header ref={headerRef} className={styles.header}>
        <ul className={styles.headBox}>
          <li className={styles.leftBox} onClick={() => setShowMenu(true)}>
            <span></span>
            <span></span>
          </li>
        </ul>
      </header>
    </>
  );
};

export default SimpleHeader;
