import { useState } from 'react';
import './header.css';
import navListData from '../../data/navListData';
import NavListItem from '../navListItem/NavListItem';
import '../navListItem/navListItem.css';

const Header = () => {
  const [navList, setNavList] = useState(navListData);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">Edward.Stu</div>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav ${menuOpen ? 'show' : ''}`}>
        {navList.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>

      <div className='userItems'>
        <a href="#" className="icon">
          <i className='bi bi-heart-fill'></i>
          <span className="like">3</span>
        </a>
        <a href="#" className="icon">
          <i className='bi bi-bag-fill'> </i>
          <span className="like">7</span>
        </a>
      </div>
    </header>
  );
};
export default Header;
