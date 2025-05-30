import './hero.css';
import HeroSwiper from '../heroswiper/HeroSwiper';

const slidesData = [
    {
      "_id": 1,
      "bgImg": "../assets/items/fashion-1.jpg",
      "title": "LOREM IPSUM DOLOR SIT AMET",
      "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolore",
      "category": ["SPRING", "SUMMER", "FALL", "WINTER"],
      "promotion": "HOT",
      "gender": "baby",
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
      "gender": "kids",
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
      "gender": "baby",
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
      "gender": "kids",
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

const Hero = () => {
  return (
    <div className="banner">
      <HeroSwiper slides={slidesData} />
    </div>
  );
};

export default Hero;
