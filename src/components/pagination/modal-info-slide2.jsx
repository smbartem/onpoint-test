import styles from "./pagination.module.css";

const ModalInfoSlide2 = () => (
  <>
    <p className={`${styles.pointsStyle} ${styles.points1Position}`}>04</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText1Position}`}>
      Ещё одно не менее важное преимущество <br /> препарата
    </p>

    <p className={`${styles.pointsStyle} ${styles.points2Position}`}>05</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText2Position}`}>
      Ещё одно важное преимущество препарата
    </p>

    <p className={`${styles.pointsStyle} ${styles.points3Position}`}>06</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText3Position}`}>
      Ещё одно важное преимущество препарата
    </p>
  </>
);

export default ModalInfoSlide2;
