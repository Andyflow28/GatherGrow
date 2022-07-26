import styles from "../styles/Header.module.scss";
import Image from "next/image";
import GitHub from "../public/github.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="titleHero">
          <h1>I am Andres Flores</h1>
          <p>
            I am a web developer in technologies such as react, next.js, nodejs,
            etc...
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
