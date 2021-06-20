import styles from "./slide-1.module.css";
import btnImage from "../../img/btn.png";
import bacteria1 from "../../img/bakti_1.png";
import bacteria2 from "../../img/bakti_2.png";
import bacteria3 from "../../img/bakti_3.png";
import bacteria4 from "../../img/bakti_4.png";
import bacteria5 from "../../img/bakti_5.png";
import bacteria6 from "../../img/bakti_6.png";
import bacteria7 from "../../img/bakti_7.png";
import pinkS1 from "../../img/pink_s_1.png";
import pinkS2 from "../../img/pink_s_2.png";

const Slide1 = ({handleSlide2ImgAnimationOnClick}) => (
  <div className={styles.slide1Container} id="home">
    <h2 className={styles.subtitle}>привет,</h2>
    <h1 className={styles.title}>
      это <strong>не</strong>
      <br /> коммерческое
      <br /> задание
    </h1>
    <a
      href="##"
      className={styles.btn}
      onClick={(e) => {
        e.preventDefault();
        const slide2 = document.querySelector("#slide2");
        slide2.scrollIntoView({
          inline: "start",
          behavior: "smooth",
        });
        handleSlide2ImgAnimationOnClick();
      }}
    >
      <img src={btnImage} alt="btnImage" className={styles.btnImage} />
    </a>
    <img src={bacteria1} alt="bacteria1" className={styles.bacteria1} />
    <img src={bacteria2} alt="bacteria2" className={styles.bacteria2} />
    <img src={bacteria3} alt="bacteria3" className={styles.bacteria3} />
    <img src={bacteria4} alt="bacteria4" className={styles.bacteria4} />
    <img src={bacteria5} alt="bacteria5" className={styles.bacteria5} />
    <img src={bacteria6} alt="bacteria6" className={styles.bacteria6} />
    <img src={bacteria7} alt="bacteria7" className={styles.bacteria7} />
    <img src={pinkS1} alt="pinkS1" className={styles.pinkS1} />
    <img src={pinkS2} alt="pinkS2" className={styles.pinkS2} />
  </div>
);

export default Slide1;
