import { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  Background,
} from "victory";
import { useUserStorage } from "../../utils/storage/login/useUserStorage";
import { CombinedChart } from "./CombinedChart";
import styles from "../../styles/informes/informe.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";

export const Informes = () => {
  const [documentType, setDocumentType] = useState("TI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data = useUserStorage();
  const { theme } = preferenceStore();
  const calculateCredits = (grade) => Math.round(grade * 100);

  const handleLogin = (e) => {
    e.preventDefault();
    data.setSimulated({
      number_identify: documentNumber,
      password: password,
    });
  };

  const chartData = data.res.grades.map((grade) => ({
    subject: grade.subject,
    final: grade.final,
    label: `${grade.subject}\nNota Final: ${grade.final.toFixed(1)}`,
  }));

  return (
    <div
      style={{ Background: theme ? "#f7f7f777" : "#f8f9fa" }}
      className={styles.container}
    >
      <div className={styles.header}>
        <img
          src={data.res.profile_img}
          alt={data.res.name}
          className={styles.profileImg}
        />
        <div className={styles.studentInfo}>
          <h1>
            {data.res.name} {data.res.last_name}
          </h1>
          <p>
            Documento: {data.res.documentType} {data.res.number_identify}
          </p>
          <p>Fecha de nacimiento: {data.res.dateOfBirth}</p>
        </div>
      </div>

      <div className={styles.gradesSection}>
        <h2>Resumen de Calificaciones</h2>
        <div
          className={styles.chartWrapper}
        >
         <CombinedChart theme={theme}/>
        </div>

        <div className={styles.gradesDetail}>
          {data.res.grades.map((grade, index) => (
            <div
              key={index}
              style={{ background: theme ? "#f7f7f777" : "#f5f5f5" }}
              className={styles.gradeCard}
            >
              <h3>{grade.subject}</h3>
              <p className={styles.code}>Código: {grade.code}</p>

              <div
                style={{ background: theme ? "#2c3e50" : "#f5f5f5" }}
                className={styles.subjectChart}
              >
                <VictoryChart
                  theme={VictoryTheme.material}
                  domainPadding={{ x: 20 }}
                  height={200}
                  padding={{ top: 20, bottom: 30, left: 40, right: 20 }}
                >
                  <VictoryAxis
                    tickFormat={["Nota 1", "Nota 2", "Nota 3"]}
                    style={{
                      tickLabels: { fontSize: 10 },
                      grid: { stroke: "none" },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    domain={[0, 5]}
                    tickValues={[0, 1, 2, 3, 4, 5]}
                    style={{
                      tickLabels: { fontSize: 10 },
                      grid: { stroke: "#E1E1E1" },
                    }}
                  />
                  <VictoryBar
                    data={grade.grades.map((g, i) => ({
                      x: `Nota ${i + 1}`,
                      y: g,
                      label: g.toFixed(1),
                    }))}
                    labels={({ datum }) => datum.label}
                    labelComponent={
                      <VictoryTooltip
                        style={{ fontSize: 10 }}
                        flyoutStyle={{
                          stroke: "#455A64",
                          fill: "white",
                        }}
                      />
                    }
                    style={{
                      data: {
                        fill: ({ datum }) => {
                          if (datum.y >= 4) return "#4CAF50";
                          if (datum.y >= 3) return "#FFC107";
                          return "#F44336";
                        },
                        width: 20,
                      },
                    }}
                    animate={{
                      duration: 500,
                      onLoad: { duration: 500 },
                    }}
                  />
                </VictoryChart>
              </div>

              <div className={styles.gradesList}>
                <div className={styles.finalGrade}>
                  <span>Nota Final:</span>
                  <span
                    className={`${styles.gradeValue} ${
                      grade.final >= 4
                        ? styles.excellent
                        : grade.final >= 3
                        ? styles.good
                        : styles.poor
                    }`}
                  >
                    {grade.final.toFixed(1)}
                  </span>
                </div>
              </div>
              <p className={styles.points}>Creditos: {grade.points}</p>
            </div>
          ))}
          
          {data.res.grades.map((subject, index) => (
            <div
              key={index}
              style={{ background: theme ? "#2c3e50" : "#f5f5f5" }}
              className={styles.subjectCard}
            >
              <h3 className={styles.subjectTitle}>{subject.subject}</h3>
              <p className={styles.subjectCode}>Código: {subject.code}</p>

              <div className={styles.circleChartContainer}>
                <div className={styles.circleChart}>
                  {subject.grades.map((grade, i) => {
                    const credits = calculateCredits(grade);
                    const rotation = i * 120;
                    const color =
                      grade >= 4
                        ? "#4CAF50"
                        : grade >= 3
                        ? "#FFC107"
                        : "#F44336";

                    return (
                      <div
                        key={i}
                        className={styles.chartSegment}
                        style={{
                          transform: `rotate(${rotation}deg)`,
                          "--segment-color": color,
                          "--segment-angle": `${credits}deg`,
                        }}
                      >
                        <span className={styles.creditLabel}>
                          {credits} créditos
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.legendContainer}>
                  {subject.grades.map((grade, i) => (
                    <div key={i} className={styles.legendItem}>
                      <span
                        className={styles.legendDot}
                        style={{
                          backgroundColor:
                            grade >= 4
                              ? "#4CAF50"
                              : grade >= 3
                              ? "#FFC107"
                              : "#F44336",
                        }}
                      />
                      <span className={styles.legendText}>Nota {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.gradeInfo}>
                <div className={styles.finalGradeRow}>
                  <span>Nota Final:</span>
                  <span
                    className={`${styles.finalGradeValue} ${
                      subject.final >= 4
                        ? styles.gradeHigh
                        : subject.final >= 3
                        ? styles.gradeMedium
                        : styles.gradeLow
                    }`}
                  >
                    {subject.final.toFixed(1)}
                  </span>
                </div>
              </div>
              <p className={styles.creditTotal}>Créditos: {subject.points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
