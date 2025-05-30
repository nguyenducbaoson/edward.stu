import { Link } from 'react-router-dom';
import './navListItem.css';

type Props = {
  nav: Nav;
};

type Nav = {
  _id: number;
  link: string;
  name: string;
  current: string;
  next: string;
  active: boolean;
};

const NavListItem = (props: Props) => {
  return (
    <li>
      <Link to={props.nav.link}>
        {props.nav.name}
      </Link>
    </li>
  );
};

export default NavListItem;
