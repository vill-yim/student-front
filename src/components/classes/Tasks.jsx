import styles from "../../styles/classes/clases.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";


export const Tasks = () => {
  const taskList = [
    {
      subject: "Historia",
      task: "Leer capítulo 5 y tomar apuntes",
      dueDate: "27/10/2024",
      priority: "Alta",
    },
    {
      subject: "Matemáticas",
      task: "Resolver problemas de álgebra (páginas 34-36)",
      dueDate: "28/10/2024",
      priority: "Media",
    },
    {
      subject: "Ciencias",
      task: "Preparar exposición sobre el sistema solar",
      dueDate: "30/10/2024",
      priority: "Alta",
    },
    {
      subject: "Lengua",
      task: "Escribir ensayo sobre la Revolución Industrial",
      dueDate: "29/10/2024",
      priority: "Baja",
    },
    {
      subject: "Química",
      task: "Realizar prácticas de laboratorio",
      dueDate: "31/10/2024",
      priority: "Media",
    },
  ];
  const {theme} = preferenceStore()

  return (
    <div
      style={{ background: theme ? "#f7f7f777" : "#ffffff" }}
      className={styles.container_task}
    >
      <h2 className={styles.title}>Mis Tareas Escolares</h2>
      <div className={styles.taskList}>
        {taskList.map((taskItem, index) => (
          <div key={index} className={styles.task}>
            <div className={styles.taskHeader}>
              <span className={styles.subject}>{taskItem.subject}</span>
              <span className={styles.dueDate}>{taskItem.dueDate}</span>
            </div>
            <div className={styles.taskDescription}>{taskItem.task}</div>
            <div className={styles.priority}>
              Prioridad: {taskItem.priority}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
