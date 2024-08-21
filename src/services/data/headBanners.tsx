import mainBanner01 from '../../assets/images/mainBanner/mainBanner01.png';
import mainBanner02 from '../../assets/images/mainBanner/mainBanner02.png';
import mainBanner03 from '../../assets/images/mainBanner/mainBanner03.png';

type Banner = {
  link: string;
  src: string;
  alt: string;
};

const banners: Banner[] = [
  { link: "javascript:;", src: mainBanner01, alt: "메인 배너 1" },
  { link: "javascript:;", src: mainBanner02, alt: "메인 배너 2" },
  { link: "javascript:;", src: mainBanner03, alt: "메인 배너 3" }
];

export default banners;