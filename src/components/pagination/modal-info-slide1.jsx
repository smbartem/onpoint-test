import styles from "./pagination.module.css";

const ModalInfoSlide1 = () => (
  <>
    <p className={`${styles.pointsStyle} ${styles.points1Position}`}>01</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText1Position}`}>
      Самое важное и ключевое преимущество <br /> нашего препарата
    </p>

    <p className={`${styles.pointsStyle} ${styles.points2Position}`}>02</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText2Position}`}>Второе по важности преимущество</p>

    <p className={`${styles.pointsStyle} ${styles.points3Position}`}>03</p>
    <p className={`${styles.modalTextStyle} ${styles.modalText3Position}`}>Ещё одно важное преимущество препарата</p>
  </>
);

export default ModalInfoSlide1;
