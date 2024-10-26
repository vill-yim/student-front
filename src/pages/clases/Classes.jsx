import styles from "../../styles/classes/clases.module.css";
import { Clase } from "../../components/classes/Clase";
import { Tasks } from "../../components/classes/Tasks";

export const Classes = () => {
  

  return (
    <div className={styles["content-clastask"]}>
      <Clase />
      <Tasks />
    </div>
  );
};
