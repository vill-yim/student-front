import styles from "../../styles/landing/prefooter.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore.jsx";

const texto = {
  title1: "¿Por qué funciona FinEd?",
  img: "https://img.icons8.com/emoji/60/bullseye.png",
  title2: "Aprendizaje Dinámico y Personalizado:",
  descript1:
    "Los estudiantes desarrollan habilidades financieras a su propio ritmo, mediante minijuegos, desafíos interactivos y simulaciones. Cada actividad está diseñada para enseñar conceptos como ahorro, inversión y presupuesto, asegurando que los jóvenes puedan aplicar lo aprendido en su vida diaria",
  img2: "https://img.icons8.com/3d-fluency/60/combo-chart.png",
  title3: " Contenido Confiable y Actualizado",
  descript2:
    " Nuestro contenido es creado con el apoyo de expertos en finanzas y educación. Las lecciones cubren temas esenciales para la toma de decisiones económicas responsables y se actualizan continuamente para adaptarse a las tendencias del mercado y las nuevas tecnologías.",
  img3: "https://img.icons8.com/external-flaticons-flat-flat-icons/60/external-content-project-management-flaticons-flat-flat-icons-4.png",
  title4: "Herramientas para Docentes y Familias",
  descript3:
    "Ofrecemos plataformas de monitoreo y retroalimentación para que los docentes sigan el progreso de sus estudiantes en tiempo real. Además, brindamos guías y talleres para padres, promoviendo la educación financiera en el hogar y fortaleciendo la conexión entre el aprendizaje escolar y la vida familiar.",
};

const RenderTarget = ({ title_target, image, state, description }) => {
  return (
    <div className={styles["target"]}>
      <div className={styles["target-img"]}>
        <img src={image} alt="image service" />
      </div>

      <h4 className={`${styles[state ? "titledk-target" : "titlelg-target"]}`}>
        {title_target}
      </h4>

      <p
        className={`${styles[state ? "descripdk-target" : "descriplg-target"]}`}
      >
        {description}
      </p>
    </div>
  );
};

export const PreFooter = () => {
  const { theme } = preferenceStore();

  return (
    <div className={styles["content-prefooter"]}>
      <div className={styles["title-prefooter"]}>
        <h3 className={`${styles[theme ? "title-dk" : "title-lg"]}`}>
          {texto.title1}
        </h3>
      </div>

      <div className={styles["content-targets"]}>
        <RenderTarget
          image={texto.img}
          state={theme}
          title_target={texto.title2}
          description={texto.descript1}
        />
        <RenderTarget
          state={theme}
          image={texto.img2}
          title_target={texto.title3}
          description={texto.descript2}
        />
        <RenderTarget
          state={theme}
          image={texto.img3}
          title_target={texto.title4}
          description={texto.descript3}
        />
      </div>
    </div>
  );
};
