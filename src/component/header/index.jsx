import styles from "../../homepage/home.module.css";
import logo from "../../images/AgroLink.png";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
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
      <Nav />
    </div>
  );
};

export default Header;

export const Nav = function () {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={styles.burger} onClick={handleShow}>
          {show ? <FaTimes size={"30px"} /> : <IoMdMenu size={"30px"} />}
        </div>
        <ul className={`${styles.listCon} ${show ? styles.active : ""}`}>
          {Menus.map((menu) => (
            <li className={styles.list_item} key={menu.id}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
