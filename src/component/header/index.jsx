
import styles from "../../homepage/home.module.css"
import logo from "../../images/AgroLink.png";
const Menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Produce",
    link: "/produce",
  },
  {
    id: 3,
    title: "Community",
    link: "/community",
  },
  {
    id: 4,
    title: "Rewards",
    link: "/reward",
  },
  {
    id: 5,
    title: "Account",
    link: "/account",
  },
];
const Header = function () {
  return (
    <div>
      <Nav/>
    </div>
  );
};

export default Header;

export const Nav = function(){
  return <nav className={styles.nav}>
  <div className={styles.container}>
    <a href="/">
      <img src={logo} alt="logo"  />
    </a>
    <ul className={styles.list}>
      {Menus.map((menu) => (
        <li key={menu.id}>
          <a href={menu.link}>{menu.title}</a>
        </li>
      ))}
    </ul>
  </div>
</nav>
}

