import styles from "./slide-2.module.css";
import sp1 from "../../img/slide2_s_1.png";
import sp2 from "../../img/slide2_s_2.png";
import sp3 from "../../img/slide2_s_3.png";
import sp4 from "../../img/slide2_s_4.png";
import sp5 from "../../img/slide2_s_5.png";

const Slide2 = ({animation}) => {
  return (
    <div className={styles.slide2Container} id="slide2">
      <h2 className={styles.title}>
        текст <br /> сообщения
      </h2>
      <div className={styles.textContainer}></div>
      <div className={styles.scrollbar}>
        <p className={styles.text}>
          <b>Сперматозоид</b> (от др.-греч. σπέρμα род. п. σπέρματος здесь
          «сперма» + ζωή «жизнь» + εδος «вид, облик», лат. spermatozoon,
          spermium) — мужская половая клетка (гамета) размножающихся посредством
          оогамии организмов.
          <br />
          Сперматозоиды обычно обладают способностью к активному движению и
          служат для оплодотворения женской гаметы — яйцеклетки. Обычно они
          значительно меньше яйцеклеток, поскольку не содержат столь
          значительного количества цитоплазмы и производятся организмом
          одновременно в значительном количестве. <br />
          Типичное строение сперматозоида отражает форму общего предка животных
          и грибов: одноклеточный ядерный организм, передвигающийся за счёт
          жгутика в задней части, используя его подобно хвосту. Обширная группа
          происходящих от него организмов включает в себя животных, большинство
          грибов и некоторые группы протистов и называется кланом
          заднежгутиковых. Большинство других эукариот со жгутиками имеют их в
          передней части. В широком смысле слова по традиции сперматозоидами
          иногда называют мужские половые клетки также у растений, к ним
          применяют также термины спермии или антерозоиды (их применяют также к
          традиционно сближавшимся с растениями грибам).
          <br />
          https://ru.wikipedia.org/wiki/сперматозоид
        </p>
      </div>
      <img
        src={sp1}
        alt="sp1"
        className={`${styles.image} ${styles[animation]}`}
        id="imageAnimation"
      />
      <img
        src={sp2}
        alt="sp2"
        className={`${styles.image} ${styles[animation]}`}
        id="imageAnimation"
      />
      <img
        src={sp3}
        alt="sp3"
        className={`${styles.image} ${styles[animation]}`}
        id="imageAnimation"
      />
      <img
        src={sp4}
        alt="sp4"
        className={`${styles.image} ${styles[animation]}`}
        id="imageAnimation"
      />
      <img
        src={sp5}
        alt="sp5"
        className={`${styles.image} ${styles[animation]}`}
        id="imageAnimation"
      />
    </div>
  );
};

export default Slide2;
