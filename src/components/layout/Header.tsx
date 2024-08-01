import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './Header.module.css';

import logo from '../../assets/images/img/img_logo01.png';
import icon_cart from "../../assets/images/svg/icon_cart.svg";
import icon_search from "../../assets/images/svg/icon_search.svg";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const fixedHeadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the header is not intersecting, make the fixed header sticky
        setIsSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <ul className={styles.headBox}>
          <li className={styles.leftBox}>
            <span></span>
            <span></span>
          </li>
          <li className={styles.logoWrap}>
            <h1 className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="메인 로고" />
              </Link>
            </h1>
          </li>
          <li className={styles.rightBox}>
            <div className={styles.search}>
              <img src={icon_search} alt="검색 아이콘" />
            </div>
            <Link to="/cart" className={styles.cart}>
              <img src={icon_cart} alt="장바구니 아이콘" />
            </Link>
          </li>
        </ul>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation
        >
          <SwiperSlide><Link to="/category">Category</Link></SwiperSlide>
          <SwiperSlide><Link to="/product">Product</Link></SwiperSlide>
          <SwiperSlide><Link to="/profile">Profile</Link></SwiperSlide>
          <SwiperSlide><Link to="/board">Board</Link></SwiperSlide>
          <SwiperSlide><Link to="/support">Support</Link></SwiperSlide>
        </Swiper>
      </header>

      <div
        ref={fixedHeadRef}
        className={`${styles.fiexd_head} ${isSticky ? styles.sticky : ''}`}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          navigation
        >
          <SwiperSlide><Link to="/category">Category</Link></SwiperSlide>
          <SwiperSlide><Link to="/product">Product</Link></SwiperSlide>
          <SwiperSlide><Link to="/profile">Profile</Link></SwiperSlide>
          <SwiperSlide><Link to="/board">Board</Link></SwiperSlide>
          <SwiperSlide><Link to="/support">Support</Link></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Header;
