import Link from "next/link";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Icon from "../public/favicon.ico";

const NavBar = () => {
  return (
    <>
      
      <div className="Header">
      <Image className={styles.logo} alt="logo" src={Icon}></Image>
        <nav className={styles.nav}>
          <ul className={styles.tabs}>
            <li>
              <Link href="/Home">
                <a className={styles.a}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a className={styles.a}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <a className={styles.a}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <a href="/login" className={styles.button}>Contact  </a>
      </div>
    </>
  );
};

export default NavBar;
