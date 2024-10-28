import React from "react";
import {
  GamifiedModule,
  BigDataAnalysis,
  FinancialCompetitions,
  VirtualLibrary,
  DigitalCertification,
} from "./Services/Service";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";
import styles from "../../styles/servicestyle/serviceOne.module.css";

export const Services = () => {
  const {theme} = preferenceStore()
  return (
    <div className={styles["content-all-services"]}>
      <div className={styles.container}>
        <h1
          style={{ color: theme ? "#f7fafc" :  "#2d3748"}}
          className={styles.title}
        >
          Nuestros Servicios Educativos
        </h1>
        <div className={styles.servicesGrid}>
          <GamifiedModule />
          <BigDataAnalysis />
          <FinancialCompetitions />
          <VirtualLibrary />
          <DigitalCertification />
        </div>
      </div>
    </div>
  );
};
