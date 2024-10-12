import styles from "../../styles/landing/secondsection.module.css";

export const SecondSection = () => {
  return (
    <div className={styles["second"]}>
      <div className={styles["l-content"]}>
        <div className={styles["img"]}></div>
      </div>
      <div className={styles["r-content"]}>
        <h3 style={{ color: "#A9A9A9" }}>
          ¿Cansado de la misma rutina en la escuela?
        </h3>

        <p>
          ¡Transforma tu experiencia escolar! Nuestra app para estudiantes te
          ofrece juegos, eventos sociales y recompensas por tus logros. Aprende
          a manejar tu dinero de manera divertida y celebra cada éxito con tus
          amigos. ¡Haz que tu progreso brille!
        </p>
      </div>
    </div>
  );
};
