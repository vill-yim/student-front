import styles from "../../styles/landing/prefooter.module.css";

export const PreFooter = () => {
  return (
    <div className={styles["prefooter"]}>
      <div className={styles["l-content"]}>
        <h3 >
          ¡Conviértete en un maestro de tus logros!
        </h3>

        <p>
          Desbloquea recompensas y haz que tus esfuerzos cuenten. Con cada
          desafío superado, tu avatar cobra vida y tu progreso brilla. ¡Es hora
          de hacer que el aprendizaje sea emocionante!
        </p>
      </div>
      <div className={styles["r-content"]}>
        <div className={styles["img"]}></div>
      </div>
    </div>
  );
};

