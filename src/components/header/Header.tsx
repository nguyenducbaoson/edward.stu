import { useState } from 'react'
import './header.css'
import navListData from '../../data/navListData'
import NavListItem from '../navListItem/NavListItem';
import '../navListItem/navListItem.css'

const Header = () => {

    const [navList, setNavList] = useState(navListData);
  return (
<header>
  <div className="logo">Edward.Stu</div>

  <ul className="nav">
    {navList.map(nav => (
      <NavListItem key={nav._id} nav={nav} />
    ))}
  </ul>

<div className='userItems'>
  <a href="#" className="icon">
    <i className='bi bi-heart-fill'> </i>
    <span className="like">3</span>
  </a>
  <a href="#" className="icon">
    <i className='bi bi-bag-fill'> </i>
    <span className="like">7</span>
  </a>
</div>
</header>
  )
}

export default Header