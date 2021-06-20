import { useState } from "react";
import Modal from "../pagination/pagination";
import styles from "./slide-3.module.css";
import bubble1 from "../../img/bubble_1.png";
import bubble2 from "../../img/bubble_2.png";
import bubble3 from "../../img/bubble_3.png";
import bubble4 from "../../img/bubble_4.png";
import bubble5 from "../../img/bubble_5.png";
import bubble6 from "../../img/bubble_6.png";
import bubble7 from "../../img/bubble_7.png";
import bubble8 from "../../img/bubble_8.png";
import bottle from "../../img/bottle.png";
import button from "../../img/btn_slide3.png";
import icon1 from "../../img/icon_slide3.png";
import icon2 from "../../img/icon2_slide3.png";

const Slide3 = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);
  const buttonMoreContainerStyle = !modal ? {"zIndex": "50"} : {"opacity": "0"};
  const opacityStyle = modal ? {"opacity": "0"} : null;
  return (
    <>
      <div className={styles.slide3Container}>
        {modal && <Modal handleModal={handleModal} />}
        <h3 className={styles.subtitleSlide3} style={opacityStyle}>Ключевое сообщение</h3>
        <h2 className={styles.titleSlide3}>
          BREND <b>XY</b>
        </h2>
        <img
          src={bubble1}
          alt="bubble1"
          className={`${styles.bubble1} ${styles.animationScale}`}
        />
        <img
          src={bubble2}
          alt="bubble2"
          className={`${styles.bubble2} ${styles.animationDiagonal}`}
        />
        <img
          src={bubble3}
          alt="bubble3"
          className={`${styles.bubble3} ${styles.animationDiagonal}`}
        />
        <img
          src={bubble4}
          alt="bubble4"
          className={`${styles.bubble4} ${styles.animationDiagonal}`}
        />
        <img
          src={bubble5}
          alt="bubble5"
          className={`${styles.bubble5} ${styles.animationVertical}`}
        />
        <img
          src={bubble6}
          alt="bubble6"
          className={`${styles.bubble6} ${styles.animationHorizontal}`}
        />
        <img
          src={bubble7}
          alt="bubble7"
          className={`${styles.bubble7} ${styles.animationScale}`}
        />
        <img
          src={bubble8}
          alt="bubble8"
          className={`${styles.bubble8} ${styles.animationDiagonal}`}
        />
        <img src={bottle} alt="bottle" className={styles.bottle} />
        <div className={styles.textContainerLeft} style={opacityStyle}>
          <img src={icon1} alt="icon1" className={styles.icon1} />
          <p className={styles.txt1}>
            3 раза в день после <br />
            еды. После приема <br /> препарата рекомен- <br /> дуется
            воздержаться <br /> от пищи и напитков <br /> в течение 1 часа
          </p>
        </div>
        <div className={styles.textContainerRight} style={opacityStyle}>
          <img src={icon2} alt="icon2" className={styles.icon2} />
          <p className={styles.txt2}>
            Курс лечения от <br /> 7 дней до 1 мес.
          </p>
        </div>
        <button className={styles.buttonMoreContainer} style={buttonMoreContainerStyle} onClick={handleModal}>
          <img
            src={button}
            alt="button"
            className={styles.buttonMore}
          />
        </button>
      </div>
    </>
  );
};

export default Slide3;
