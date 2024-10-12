import { GraphCover } from "./GraphCover";
import styles from "../../styles/landing//cover.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";

export const Cover = () => {
  const { theme } = preferenceStore();
  const initialData = [
    { time: "2018-12-22", value: 22.51 },
    { time: "2018-12-23", value: 21.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 35.46 },
    { time: "2018-12-29", value: 43.92 },
    { time: "2018-12-30", value: 44.68 },
    { time: "2018-12-31", value: 42.67 },
  ];

  return (
    <div className={styles["content-cover"]}>
      <div className={styles['coverContainer']}>
        <h1
          style={{ color: theme ? "#eaefff" : "#303755" }}
          className={styles['title']}
        >
          Aprende Economía de Forma Divertida
        </h1>
        <h2
          style={{ color: theme ? "#fff7d6" : "#303755" }}
          className={styles['subtitle']}
        >
          Descubre el mundo financiero con nuestra app interactiva
        </h2>
        <p
          style={{ color: theme ? "#ffeeca" : "#2c5282" }}
          className={styles['description']}
        >
          Sumérgete en conceptos económicos clave, participa en simulaciones de
          mercado y desafía tus conocimientos con quizzes emocionantes.
          ¡Prepárate para dominar la economía!
        </p>
        <button className={styles['ctaButton']}>
          <span>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/open-book--v1.png"
              alt="open-book--v1"
            />
          </span>
          <span>Comienza tu viaje económico</span>
        </button>
      </div>

      <div className="r-cover">
        <div className={styles["graph-cover"]}>
          <GraphCover data={initialData} />
        </div>
      </div>
    </div>
  );
};
