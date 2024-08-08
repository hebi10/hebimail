import React from 'react';
import styles from './Menu.module.css';

interface MenuProps {
  onClose: () => void;
  className?: string; // className을 선택적으로 받을 수 있도록 추가
}

const Menu: React.FC<MenuProps> = ({ onClose, className }) => {
  return (
    <div className={`${styles["menu-container"]} ${className}`}>
      <button onClick={onClose} className={styles["close-button"]}>
        닫기
      </button>
      {/* 여기 메뉴 내용을 추가하세요 */}
    </div>
  );
};

export default Menu;
