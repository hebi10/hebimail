import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './HomePage.module.css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import mainBanner01 from '../assets/images/mainBanner/mainBanner01.png';
import mainBanner02 from '../assets/images/mainBanner/mainBanner02.png';
import mainBanner03 from '../assets/images/mainBanner/mainBanner03.png';
const banners = [
  { link: "javascript:;", src: mainBanner01, alt: "메인 배너 1" },
  { link: "javascript:;", src: mainBanner02, alt: "메인 배너 2" },
  { link: "javascript:;", src: mainBanner03, alt: "메인 배너 3" }
];

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          modules={[Navigation]}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Link to={banner.link}>
                <img src={banner.src} alt={banner.alt} />
              </Link>
            </SwiperSlide>
          ))}

          {/* 커스터마이즈된 네비게이션 버튼 */}
          <div className={styles.swiperButtonPrev}>Prev</div>
          <div className={styles.swiperButtonNext}>Next</div>
        </Swiper>
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.banner}>
          <h1>Welcome to Hebi Mall</h1>
          <p>Your one-stop shop for all things amazing!</p>
          <button className={styles.shopNowBtn}>Shop Now</button>
        </div>
        <section className={styles.featuredProducts}>
          <h2>Featured Products</h2>
          <div className={styles.productList}>
            {/* Add product cards here */}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
