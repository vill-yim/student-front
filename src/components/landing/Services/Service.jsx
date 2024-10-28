import styles from '../../../styles/servicestyle/serviceOne.module.css'



export const GamifiedModule = () => (
  <div className={styles.serviceCard}>
    <div className={`${styles.cardContent} ${styles.gamified}`}>
      <img
        src="https://i.ibb.co/CHDQ5vB/1service.jpg"
        alt="Módulos Educativos"
        className={styles.serviceImage}
      />
      <div className={styles.gameController}></div>

      <h3 style={{ color: "#2d3748"  }}>Módulos Educativos Gamificados</h3>
      <p  style={{ color:"#f7fafc" }}>
        Módulos de aprendizaje con minijuegos sobre ahorro, inversión,
        presupuesto y toma de decisiones financieras.
      </p>
      <div className={styles.gameDots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export const BigDataAnalysis = () => (
  <div className={styles.serviceCard}>
    <div className={`${styles.cardContent} ${styles.bigData}`}>
      <img
        src="../../../public/studiantes/2.svg"
        alt="Análisis Big Data"
        className={styles.serviceImage}
      />
      <div className={styles.dataPoints}>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
        <div className={styles.dataPoint}></div>
      </div>
      <h3 style={{ color: "#2d3748" }}>Análisis Personalizado con Big Data</h3>
      <p style={{ color:  "#f7fafc"}}>
        Análisis del progreso de cada estudiante mediante el uso de Big Data,
        con informes detallados para los docentes.
      </p>
      <div className={styles.dataGraph}></div>
    </div>
  </div>
);

export const FinancialCompetitions = () => (
  <div className={styles.serviceCard}>
    <div className={`${styles.cardContent} ${styles.competitions}`}>
      <img
        src="../../../public/studiantes/3.svg"
        alt="Competencias Financieras"
        className={styles.serviceImage}
      />
      <div className={styles.trophies}>
        <div className={styles.trophy}></div>
      </div>
      <h3 style={{ color: "#2d3748"  }}>Competencias y Campeonatos Financieros</h3>
      <p  style={{ color:"#f7fafc" }}>
        Organización de competencias a nivel institucional, local, regional y
        nacional para incentivar el aprendizaje.
      </p>
      <div className={styles.podium}></div>
    </div>
  </div>
);

export const VirtualLibrary = () => (
  <div className={styles.serviceCard}>
    <div className={`${styles.cardContent} ${styles.library}`}>
      <img
        src="../../../public/studiantes/4.svg"
        alt="Biblioteca Virtual"
        className={styles.serviceImage}
      />
      <div className={styles.books}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3 style={{ color: "#2d3748" }}>Biblioteca Virtual de Recursos Financieros</h3>
      <p  style={{ color: "#f7fafc" }}> 
        Acceso a videos, artículos y guías prácticas sobre temas financieros,
        inversión y emprendimiento.
      </p>
      <div className={styles.bookshelf}></div>
    </div>
  </div>
);

export const DigitalCertification = () => (
  <div className={styles.serviceCard}>
    <div className={`${styles.cardContent} ${styles.certification}`}>
      <img
        src="../../../public/studiantes/5.svg"
        alt="Certificación Digital"
        className={styles.serviceImage}
      />
      <div className={styles.badge}></div>
      <h3 style={{ color: "#2d3748"  }}>Certificación Digital y Créditos Académicos</h3>
      <p  style={{ color:"#f7fafc" }}>
        Al completar los módulos y actividades, los estudiantes obtienen
        certificaciones digitales reconocidas.
      </p>
      <div className={styles.certificationStars}></div>
    </div>
  </div>
);
