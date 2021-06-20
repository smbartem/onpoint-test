import { useState } from "react";
import Slide1 from "../slide-1/slide-1";
import Slide2 from "../slide-2/slide-2";
import Slide3 from "../slide-3/slide-3";
import styles from "./app.module.css";
import onpointLogo from "../../img/onpoint-logo.png";
import homeLogo from "../../img/home-logo.png";

function App() {
  const [slide2ImgAnimation, setSlide2ImgAnimation] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const handleSlide2ImgAnimationOnClick = () => {
    setSlide2ImgAnimation("imageAnimation");
  }

  return (
    <>
      <header className={styles.global}>
        <a
          href="##"
          className="homeLink"
          onClick={(e) => {
            e.preventDefault();
            const home = document.querySelector("#home");
            home.scrollIntoView({
              inline: "start",
              behavior: "smooth",
            });
          }}
        >
          <img src={homeLogo} alt="homeLogo" className={styles.imgGlobal} />
        </a>
      </header>
      <main
        className={styles.slider}
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchEnd={(e) => {
          const touchEnd = e.changedTouches[0].clientX;
          setSlide2ImgAnimation(
            touchStart - touchEnd > 0 && "imageAnimation"
          );
        }}
      >
        <Slide1 handleSlide2ImgAnimationOnClick={handleSlide2ImgAnimationOnClick}/>
        <Slide2 animation={slide2ImgAnimation} />
        <Slide3 />
      </main>
      <footer className={styles.shape_1}>
        <a href="https://onpoint.ru/" target="_blank" rel="noreferrer">
          <img
            src={onpointLogo}
            alt="onpointLogo"
            className={styles.imgShape_1}
          />
        </a>
      </footer>
    </>
  );
}

export default App;
