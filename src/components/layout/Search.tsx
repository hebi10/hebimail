import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  onClose: () => void;
  className?: string; // className을 선택적으로 받을 수 있도록 추가
}

const Search: React.FC<SearchProps> = ({ onClose, className }) => {
  return (
    <div className={`${styles["Search-container"]} ${className}`}>
      <button onClick={onClose} className={styles["close-button"]}>
        닫기
      </button>
      {/* 여기 메뉴 내용을 추가하세요 */}
      <div>
        <input type="text" />
        <button>검색</button>
      </div>
    </div>
  );
};

export default Search;
