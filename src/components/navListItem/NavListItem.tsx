import { Link } from 'react-router-dom';
import './navListItem.css';

type Props = {
  nav: Nav;
  onClick: (_id: number) => void;
};

type Nav = {
  _id: number;
  link: string;
  name: string;
  current: string;
  next: string;
  active: boolean;
};

const NavListItem = ({ nav, onClick }: Props) => {
  return (
    <li>
      <Link
        to={nav.link}
        className={nav.active ? 'active' : ''}
        onClick={() => onClick(nav._id)}
      >
        {nav.name}
      </Link>
    </li>
  );
};

export default NavListItem;
