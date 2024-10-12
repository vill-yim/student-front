import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";
import styles from "../../styles/user/cover.module.css";

Chart.register(...registerables);
const Graph = ({ onBarClick }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Biología",
          "Ciencias",
          "Geografía",
          "Inglés",
          "Matemáticas",
          "Arte",
        ],
        datasets: [
          {
            label: "Materias",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(50, 205, 50, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
            ],
            borderColor: [
              "#FF6384",
              "#32CD32",
              "#FFD700",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
          },
          {
            label: "Promedio",
            data: [10, 15, 5, 7, 4, 6],
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 165, 0, 0.8)",
              "rgba(135, 206, 250, 0.8)",
              "rgba(255, 20, 147, 0.8)",
              "rgba(144, 238, 144, 0.8)",
              "rgba(255, 105, 180, 0.8)",
              "rgba(255, 215, 0, 0.8)",
            ],
            borderColor: [
              "#FFA500",
              "#87CEFA",
              "#FF1493",
              "#90EE90",
              "#FF69B4",
              "#FFD700",
            ],
          },
        ],
      },
      options: {
        onClick: (event) => {
          const activePoints = chartRef.current.getElementsAtEventForMode(
            event,
            "nearest",
            { intersect: true },
            false
          );
          if (activePoints.length) {
            const clickedIndex = activePoints[0].index;
            console.log(activePoints)
            onBarClick(clickedIndex);
          }
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "#00BFFF",
            },
          },
          x: {
            grid: {
              color: "#00BFFF",
            },
          },
        },
      },
    });
  }, [onBarClick]);

  return (
    <canvas
      ref={canvasRef}
      style={{ height: "480px", width: "100%", cursor: "pointer" }}
    />
  );
};

export const Cover = () => {
  const { theme } = preferenceStore();
  const [description, setDescription] = useState("");
  const [advice, setAdvice] = useState("");

  const handleBarClick = (index) => {
    const ratings = [12, 19, 3, 5, 2, 3];
    const tips = [
      "¡Sigue así! Muy bien en Biología.",
      "Buen trabajo, sigue mejorando en Ciencias.",
      "¡Necesitas enfocarte más en Geografía!",
      "Sigue practicando Inglés.",
      "Más esfuerzo en Matemáticas, ¡tú puedes!",
      "¡Gran creatividad en Arte!",
    ];
    setDescription(`${ratings[index]}`);
    setAdvice(tips[index]);
  };

  return (
    <div className={styles["content-cover"]}>
      <div className={styles["l-cover"]}>
        <div className={styles["title-graph"]}>
          <h5 style={{ color: theme ? "#fff6ff" : "#303755" }}>
            Todas las áreas
          </h5>
        </div>
        <div className={styles["graph"]}>
          <Graph onBarClick={handleBarClick} />
        </div>
        <div className={styles["description"]}>
          <div className={styles["observaciones"]}>
            <span
              style={{
                color: theme ? "#FF0000" : "#32CD32",
                fontSize: "clamp(.9rem,1rem,1.2rem)",
              }}
            >
              Observaciones:
            </span>
            <p
              className={styles["advice"]}
              style={{ color: theme ? "#fff6ff" : "#333" }}
            >
              {advice}
            </p>
          </div>

          <div className={styles["calificacion"]}>
            <span style={{ color: theme ? "#b7a6b4" : "#121c37" }}>
              Calificación:
            </span>
            <span
              style={{
                marginLeft: "1rem",
                color: theme ? "#fff6ff" : "#121c37",
              }}
            >
              <span style={{ color: theme ? "#FF0000" : "#32CD32" }}>
                {" "}
                {description}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles["r-cover"]}>
        <div className={styles["daily-phrase"]}>
          <h4>¡Frase del día!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            porro minus culpa odit amet nemo eveniet repudiandae ipsa enim
            sapiente! Blanditiis magnam ex quisquam libero ab dolore, error
            perferendis! Veritatis!
          </p>
        </div>
        <div className={styles["challenge"]}>
          <h4>¡Desafio diario!</h4>

                <img src="../../../public/cover/cover.png" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            porro minus culpa odit amet nemo eveniet repudiandae ipsa enim
            sapiente!
          </p>
        </div>
      </div>
    </div>
  );
};
