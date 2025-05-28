import './navListItem.css'

type Props = {
    nav: Nav
}

type Nav = {
    _id: number,
    link: string,
    name: string,
    current: string,
    next: string,
    active: boolean
}

const NavListItem = (props: Props) => {
  return (
    <li><a href="">{props.nav.name}</a></li>
  )
}

export default NavListItem