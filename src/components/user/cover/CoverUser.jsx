import {
  VictoryBar,
  VictoryPie,
  VictoryLabel,
  VictoryAnimation,
  VictoryAxis,
  VictoryChart,
  VictorySharedEvents,
} from "victory";

import style from "../../../styles/user/coverUser.module.css";
import { useState } from "react";

const RenderBars = ({ children }) => {
  return (
    <div className={style["content-targets"]}>
     
      <div className={style["target"]}> {children}</div>
    </div>
  );
};

const RenderCover = () => {
  const [observation, setObservation] = useState(null);

  const Victory = (
    <VictoryBar
      data={[
        { x: 1, y: 2, label: "Mat" },
        { x: 2, y: 4, label: "Bio" },
        { x: 3, y: 7, label: "Cie" },
        { x: 4, y: 3, label: "Esp" },
        { x: 5, y: 5, label: "Inf" },
        { x: 6, y: 4, label: "Ing" },
      ]}
      events={[
        {
          target: "data",
          eventHandlers: {
            onClick: (state) => {
              return [
                {
                  target: "labels",
                  mutation: (props) => {
                    return props.text === "clicked"
                      ? null
                      : (() => {
                          console.log(state);
                          console.log(state.data);
                          console.log(props);
                          const { data } = props;
                          console.log(data);
                        })();
                  },
                },
              ];
            },
          },
        },
      ]}
    />
  );

  const Victory2 = (
    <VictoryChart domainPadding={{ x: 40 }}>
      <VictorySharedEvents
        events={[
          {
            childName: ["bar", "otherbar"],
            target: "",
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    childName: ["bar", "otherbar"],
                  },
                ];
              },
            },
          },
        ]}
      />

      <VictoryBar
        data={[
          { experiment: "Ing", expected: 100, actual: 8 },
          { experiment: "Mat", expected: 100, actual: 5 },
          { experiment: "Soc", expected: 100, actual: 7 },
          { experiment: "Esp", expected: 100, actual: 8 },
        ]}
        x="experiment"
        y={(d) => (d.actual / d.expected) * 100}
      />
      <VictoryAxis
        label="experiment"
        style={{
          axisLabel: { padding: 30 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="percent yield"
        style={{
          axisLabel: { padding: 40 },
        }}
      />
    </VictoryChart>
  );

  const Victory3 = (
    <svg viewBox="0 0 450 350">
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
                          fill: "tomato",
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
        <g transform={"translate(220, 70)"}>
          <VictoryBar
            name="bar"
            width={300}
            standalone={false}
            style={{
              data: { width: 20 },
              labels: { fontSize: 25 },
            }}
            data={[
              { x: "Mátematicas", y: 6 },
              { x: "Inglés", y: 8 },
              { x: "Español", y: 9 },
              { x: "Artes", y: 7 },
            ]}
            labels={["Mat", "In", "Es", "Art"]}
            labelComponent={<VictoryLabel y={290} />}
          />
        </g>
        <g transform={"translate(0, -75)"}>
          <VictoryPie
            name="pie"
            width={250}
            standalone={false}
            style={{ labels: { fontSize: 15, padding: 20 } }}
            data={[
              { x: "Mátematicas", y: 6 },
              { x: "Inglés", y: 8 },
              { x: "Español", y: 9 },
              { x: "Artes", y: 7 },
            ]}
          />
        </g>
      </VictorySharedEvents>
    </svg>
  );

  return (
    <div className={style["content-bars"]}>
      <div className={style["bars"]}>
        <div className={style["title"]}>
          <h3>Promedio por Materias</h3>
        </div>

        <div className={style["content-targets"]}>
          <div className={style["targets-scroll"]}>
            <RenderBars children={Victory3} />
            <RenderBars children={Victory2} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderAsideCover = () => {

 const grades = [
   {
     subject: "Ciencias sociales",
     final: 4.4,
     color: "#FF6B6B",
   },
   {
     subject: "Lengua castellana",
     final: 4.8,
     color: "#4ECDC4",
   },
   {
     subject: "Matematicas",
     final: 3.8,
     color: "#45B7D1",
   },
 ];

  return (
    <div className={style["aside"]}>
      <div className={style["title-aside"]}>title</div>

      <div
        style={{
          width: "600px",
          maxWidth: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {grades.map((grade, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                margin: "0 0 15px 0",
                fontSize: "18px",
              }}
            >
              {grade.subject}
            </h3>

            <div
              style={{
                width: "150px",
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
                  background: "white",
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
                  {grade.final}
                </span>
              </div>
            </div>

            <p
              style={{
                margin: "15px 0 0 0",
                fontSize: "14px",
                color: "#666",
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

const CoverUser = () => {
  return (
    <div className={style["renders"]}>
      <RenderAsideCover />
      <RenderCover />
    </div>
  );
};

export default CoverUser;
