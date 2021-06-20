import { useState } from "react";
import ModalInfoSlide1 from "./modal-info-slide1";
import ModalInfoSlide2 from "./modal-info-slide2";
import styles from "./pagination.module.css";
import closeButton from "../../img/btn_close.png";
import nextButton from "../../img/btn_next.png";
import previousButton from "../../img/btn_prev.png";

const Modal = ({ handleModal }) => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className={styles.modalContainer}>
      <button className={styles.closeButton} onClick={handleModal}>
        <img src={closeButton} alt="closeButton" style={{ width: "50%" }} />
      </button>
      <div className={styles.textContainer}>
        <h3 className={styles.modalSubtitle}>Преимущества</h3>
        <div className={styles.modalInfoContainer} >
          {activePage === 1 ? <ModalInfoSlide1 /> : <ModalInfoSlide2 />}
        </div>
        <div className={styles.handleModalInfoSliderContainer}>
          <button
            className={styles.previousButton}
            onClick={() => setActivePage(1)}
          >
            <img
              src={previousButton}
              alt="previousButton"
              style={{ width: "50%" }}
            />
          </button>
          <div
            className={`${styles.handleModalInfoSliderIndicator} ${
              styles.handleModalInfoSliderIndicator1Pos
            } ${
              activePage === 1 && styles.handleModalInfoSliderIndicatorActive
            }`}
          ></div>
          <div
            className={`${styles.handleModalInfoSliderIndicator} ${
              styles.handleModalInfoSliderIndicator2Pos
            } ${
              activePage === 2 && styles.handleModalInfoSliderIndicatorActive
            }`}
          ></div>
          <button
            className={styles.nextButton}
            onClick={() => setActivePage(2)}
          >
            <img src={nextButton} alt="nextButton" style={{ width: "50%" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
