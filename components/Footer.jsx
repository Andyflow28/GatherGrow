import Link from "next/link";
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <>
    <div className={styles.footer__container}>
    <h2><Link href="/Home"><a>Home</a></Link></h2>
      <h2><Link href="/About"><a>About</a></Link></h2>
      <h2><Link href="/Contact"><a>Contact</a></Link></h2>
      <h2><Link href="/Proyects"><a>Proyects</a></Link></h2>
    </div>
    </>
  );
};

export default Footer;
