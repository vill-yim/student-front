import {
  VictoryBar,
  VictoryPie,
  VictoryLabel,
  VictoryAnimation,
  VictoryTheme,
  VictoryAxis,
  VictoryChart,
  VictorySharedEvents,
} from "victory";
import { useUserStorage } from "../../../utils/storage/login/useUserStorage";
import { preferenceStore } from "../../../utils/storage/preferences/preferenceStore";

import style from "../../../styles/user/coverUser.module.css";
import { useState } from "react";

const AnualCover = ({ state }) => {
  const student = useUserStorage((state) => state.res);

  if (!student || !student.grades) {
    return null;
  }

  const Victory3 = (
    <svg viewBox="0 0 610 320">
      <VictorySharedEvents
        events={[
          {
            childName: ["pie", "bar"],
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    childName: ["pie", "bar"],
                    mutation: (props) => {
                      return {
                        style: Object.assign({}, props.style, {
                          fill: "#FF6B6B",
                        }),
                      };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    childName: ["pie", "bar"],
                    mutation: () => {
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
      >
        <g transform={"translate(310, 30)"}>
          <VictoryBar
            name="bar"
            width={300}
            standalone={false}
            style={{
              data: { width: 20, fill: "#4C6EF5" },
              labels: { fontSize: 16, fill: state ? "#ffffff" : "#333" },
            }}
            data={student.grades.map((grade) => ({
              x: grade.subject,
              y: grade.final,
            }))}
            labels={student.grades.map((grade) =>
              grade.subject.substring(0, 3)
            )}
            labelComponent={<VictoryLabel y={290} />}
          />
        </g>

        <g transform={"translate(15, -50)"}>
          <VictoryPie
            name="pie"
            width={250}
            standalone={false}
            style={{
              data: {
                fill: ({ datum }) => {
                  return datum.y > 4.5
                    ? "#40C057"
                    : datum.y > 4.0
                    ? "#4C6EF5"
                    : datum.y > 3.5
                    ? "#FCC419"
                    : "#FF6B6B";
                },
              },
              labels: {
                fontSize: 12,
                fill: state ? "#ffffff" : "#333",
                padding: 10,
              },
            }}
            data={student.grades.map((grade) => ({
              x: grade.subject,
              y: grade.final,
            }))}
          />
        </g>
      </VictorySharedEvents>
    </svg>
  );

  return (
    <div
      style={{ Background: state ? "#f7f7f777" : "#f8f9fa" }}
      className={style.container}
    >
      <div className={style.chartContainer}>{Victory3}</div>
      <div className={style.summary}>
        <p
          style={{
            color: state ? "#ffffff" : "#333",
          }}
        >
          Promedio general:
          {(
            student.grades.reduce((acc, curr) => acc + curr.final, 0) /
            student.grades.length
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const RenderCover = () => {
  const [observation, setObservation] = useState(null);

  const PeriodChart = ({ periodIndex, grades, state }) => {
    const data = grades.map((subject) => ({
      subject: subject.subject.substring(0, 3),
      grade: subject.grades[periodIndex],
    }));

    const average = (
      data.reduce((acc, curr) => acc + curr.grade, 0) / data.length
    ).toFixed(2);

    return (
      <div
        className={style["target"]}
        key={periodIndex}
       
      >
        <h3
          style={{ color: state ? "#f7f7f7" : " #4e4e4e" }}
          className={`text-xl font-bold mb-2 ${
            state ? "text-white" : "text-gray-800"
          }`}
        >
          Periodo {periodIndex + 1} - Promedio: {average}
        </h3>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          style={{
            parent: {
              background: "transparent",
            },
          }}
        >
          <VictoryAxis
            tickFormat={(t) => t}
            style={{
              tickLabels: { fill: state ? "#fff" : "#333", fontSize: 12 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(t) => t}
            style={{
              tickLabels: { fill: state ? "#fff" : "#333", fontSize: 12 },
            }}
          />
          <VictoryBar
            data={data}
            x="subject"
            y="grade"
            style={{
              data: {
                fill: ({ datum }) =>
                  datum.grade >= 4.5
                    ? "#4CAF50"
                    : datum.grade >= 3.5
                    ? "#2196F3"
                    : "#F44336",
              },
            }}
            labels={({ datum }) => datum.grade.toFixed(1)}
            labelComponent={
              <VictoryLabel style={{ fill: state ? "#fff" : "#333" }} />
            }
          />
        </VictoryChart>
      </div>
    );
  };

  const { theme } = preferenceStore();
  const { res } = useUserStorage();

  return (
    <div className={style["content-bars"]}>
      <div className={style["bars"]}>
        <div
          style={{ color: theme ? " #f7f7f7" : " #4e4e4e" }}
          className={style["title"]}
        >
          <h3>Promedio General</h3>
        </div>

        <AnualCover state={theme} />
      </div>

      <div className={style["bars"]}>
        <div className={style["title"]}>
          <h3 style={{ color: theme ? "#f7f7f7" : " #4e4e4e" }}>
            Promedio por Materias
          </h3>
        </div>

        <div className={style["content-targets"]}>
          <div className={style["targets-scroll"]}>
            <PeriodChart periodIndex={0} grades={res.grades} state={theme} />
            <PeriodChart periodIndex={1} grades={res.grades} state={theme} />
            <PeriodChart periodIndex={2} grades={res.grades} state={theme} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderAsideCover = () => {
  const { theme } = preferenceStore();

  const grades = [
    {
      subject: "Ciencias sociales",
      final: 4.4,
      color: " #40DC64",
    },
    {
      subject: "Lengua castellana",
      final: 4.8,
      color: "#00FF64",
    },
    {
      subject: "Matematicas",
      final: 3.8,
      color: "#FCC419",
    },
  ];

  return (
    <div className={style["aside"]}>
      <div
        style={{
          textAlign: "start",
          color: theme ? "#ffffff" : "#333",
        }}
        className={style["title-aside"]}
      >
        Tus materias
      </div>

      <div
        className={style["content-circles"]}
        style={{
          width: "100%",
          maxWidth: "100%",
          justifyContent: "center",
        }}
      >
        {grades.map((grade, index) => (
          <div className={style["circle"]} key={index}>
            <h3 style={{ color: theme ? "#f7f7f7" : " #4e4e4e" }}>
              {grade.subject}
            </h3>

            <div
              style={{
                width: "150px",
                margin: "5px",
                height: "150px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: `conic-gradient(
                ${grade.color} ${(grade.final / 5) * 360}deg,
                #e5e5e5 ${(grade.final / 5) * 360}deg 360deg
              )`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120px",
                  height: "120px",
                  background: theme ? " #4e4e4e" : "#f7f7f7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: grade.color,
                  }}
                >
                  <b style={{ color: theme ? "#f7f7f7" : " #4e4e4e" }}>
                    {grade.final}
                  </b>
                </span>
              </div>
            </div>

            <p
              style={{
                margin: "15px 0 0 0",
                color: theme ? "#f7f7f7" : " #4e4e4e",
                textAlign: "end",
                fontSize: "14px",
              }}
            >
              {((grade.final / 5) * 100).toFixed(1)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CoverUser = () => {
  return (
    <div className={style["renders"]}>
      <RenderCover />
      <RenderAsideCover />
    </div>
  );
};
