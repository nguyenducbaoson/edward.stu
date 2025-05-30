import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './heroswiper.css'
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
      direction="vertical"
      slidesPerView={1}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
      }}
      speed={700}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      className="heroSwiper"
      style={{ height: '100vh' }}
    >
      {slides?.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div
            style={{
              backgroundImage: `url(${slide.bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              position: 'relative',
              color: 'white',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                zIndex: 10,
              }}
            >
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-6">{slide.subtitle}</p>
              <button className="mainButton">Shop Now</button>
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
