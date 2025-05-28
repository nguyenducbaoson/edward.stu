import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './hero.css';
import HeroSwiper from '../heroswiper/HeroSwiper';

type Props = {}

const Hero = (props: Props) => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { items } = context;

  return (
    <div className="banner">
      {
        items && items.length > 0 && items.map(item => (
          <div className="item" key={item._id}>
            <img src={item.bgImg} alt={item.title} className={`bgImg ${item.active ? 'active' : undefined }`} />
            <div className={`content ${item.active ? 'active' : undefined }`}>
              <p>{item.subtitle}</p>
              <h1>{item.title}</h1>
              <a href="#" className="mainButton">Shop now <i className='bi bi-cart2'></i></a>
              <a href="#" className="markButton"><i className='bi bi-bookmark-plus-fill'></i></a>
            </div>
            <div className="subtitle">
              <span className="slogan">{item.category} Collection</span>
              <span className={`number ${item.active ? 'active' : undefined }`}>{String(item._id).padStart(2, '0')}</span>
            </div>
          </div>
        ))
      }
      {
        items && items.length > 0 && <HeroSwiper />
      }
    </div>
  );
}

export default Hero;
