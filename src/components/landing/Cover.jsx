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
      <div className={styles["l-cover"]}>
        <img
          src="../../../public/studiantes/imgcover.png"
          alt="img studiante"
        />
      </div>

      <div className={styles["cover-container"]}>
        <h1
          className={(styles[theme ? "lgbg-h1" : "darkbg-h1"])}
        >
          <span>Empoderamos jóvenes <br /> para transformar comunidades.</span>
        </h1>
        <p
          style={{ color: theme ? "#ffeeca" : "#2c5282" }}
          className={styles["description"]}
        >
          Creemos en el potencial de cada estudiante como agente de cambio.
          Nuestra misión es acompañar a jóvenes, maestros y familias en el
          desarrollo de habilidades como ahorro, inversión y emprendimiento. A
          través de una plataforma educativa interactiva con juegos, desafíos y
          tecnología 4.0, los preparamos para tomar decisiones financieras
          responsables y contribuir al crecimiento de sus comunidades.
        </p>

        <div className={styles["buttons"]}>
          <button className={styles["ctaButton"]}>
            <span></span>
            <span>Servicios</span>
          </button>

          <button className={styles["ctaButton"]}>
            <span></span>
            <span>Estudiantes</span>
          </button>

          <button className={styles["ctaButton"]}>
            <span></span>
            <span>Contactanos</span>
          </button>
        </div>
      </div>
    </div>
  );
};
