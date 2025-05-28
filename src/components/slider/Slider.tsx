import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import './style.css'

const slidesData = [
    {
      "_id": 1,
      "bgImg": "../assets/items/fashion-1.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "HOT",
      "gender": "women",
      "price": 100.36,
      "discount": 0.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": true
    },
    {
      "_id": 2,
      "bgImg": "../assets/items/fashion-2.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "HOT",
      "gender": "women",
      "price": 120.76,
      "discount": 0.2,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 3,
      "bgImg": "../assets/items/fashion-3.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "STAR",
      "gender": "women",
      "price": 180.98,
      "discount": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 4,
      "bgImg": "../assets/items/fashion-4.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "STAR",
      "gender": "women",
      "price": 100.36,
      "discount": 0.1,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 5,
      "bgImg": "../assets/items/fashion-5.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "HOT",
      "gender": "women",
      "price": 1068.26,
      "discount": 0.2,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 6,
      "bgImg": "../assets/items/fashion-6.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "SEASON",
      "gender": "women",
      "price": 754.12,
      "discount": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 7,
      "bgImg": "../assets/items/fashion-7.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "SEASON",
      "gender": "men",
      "price": 482.99,
      "discount": 0.05,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    },
    {
      "_id": 8,
      "bgImg": "../assets/items/fashion-8.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "SALES",
      "gender": "men",
      "price": 197.56,
      "discount": 0.1,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.",
      "active": false
    }
]


const Slider = () => {
  const swiperWrappedRef = useRef<HTMLDivElement | null>(null);

function adjustMargin() {
  const screenWidth = window.innerWidth;

  if (swiperWrappedRef.current) {
    swiperWrappedRef.current.style.marginLeft =
      screenWidth < 520
        ? '0px'
        : screenWidth <= 650
        ? '-50px'
        : screenWidth <= 800
        ? '-100px'
        : '-150px';
  }
}

  useEffect(() =>{
    adjustMargin();
    window.addEventListener('resize', adjustMargin);
    return () => window.removeEventListener('resize', adjustMargin);
  }, [])
  return (
    <main className='container'>
          <Swiper 
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{clickable: true}}
          breakpoints={{
            320:{spaceBetween: 40},
            650:{spaceBetween: 30},
            1000:{spaceBetween: 20},
          }}
          onSwiper={(swiper) =>{
            swiperWrappedRef.current = swiper.wrapperEl as HTMLDivElement;
          }}>
            {slidesData.map((slide) => (
              <SwiperSlide key={slide._id}>
                <img src={slide.bgImg} alt={slide.title} />
                <div className='title'>
                  <h1>{slide.title}</h1>
                </div>
                <div className='content'>
                  <div className='text-box'>
                    <p>{slide.description}</p>
                  </div>
                  <div className='footer'>
                    <div className='category'>
                      {slide.category.map((cate, idx) => (
                        <span key={idx} style={{ "--i": idx + 1 } as React.CSSProperties & { [key: string]: string | number }}>
                          {cate}
                        </span>
                      ))}
                    </div>
                    <button>
                      <span className='label'>More</span>
                    </button>
                  </div>
                </div>
                </SwiperSlide>
            ))};
    </Swiper>
    </main>
  );
}

export default Slider