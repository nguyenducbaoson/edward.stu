import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface SlideItem {
  _id: number;
  bgImg: string;
  title: string;
  subtitle: string;
  category: string[];
  promotion: string;
  gender: string;
  price: number;
  discount: number;
  description: string;
  active: boolean;
}

type Props = {
  slides?: SlideItem[];
};

const HeroSwiper = ({ slides }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className="heroSwiper"
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div className="slideItem" style={{
            backgroundImage: `url(${slide.bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            color: 'white',
            position: 'relative'
          }}>
            <div className="slideContent" style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button className="mainButton">Shop Now</button>
            </div>
            <div className="overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
