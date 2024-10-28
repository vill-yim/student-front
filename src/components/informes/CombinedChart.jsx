import React from "react";
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictorySharedEvents,
  VictoryContainer,
  VictoryLabel,
} from "victory";

export const CombinedChart = ({ theme }) => {
  const chartData = [
    { subject: "Ciencias sociales", value: 4.4, label: "C.S" },
    { subject: "Lengua castellana", value: 4.8, label: "L.C" },
    { subject: "Matematicas", value: 3.8, label: "Mat" },
  ];

  return (
    <svg viewBox="0 0 900 450">
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
                          fill: "#4CAF50",
                          opacity: 0.7,
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
                    mutation: (props) => {
                      const defaultColor =
                        props.datum.value >= 4
                          ? "#4CAF50"
                          : props.datum.value >= 3
                          ? "#FFC107"
                          : "#F44336";
                      return {
                        style: Object.assign({}, props.style, {
                          fill: defaultColor,
                          opacity: 1,
                        }),
                      };
                    },
                  },
                ];
              },
            },
          },
        ]}
      >
        {/* Gráfico Circular */}
        <g transform={"translate(0, -40)"} >
          <VictoryPie
            name="pie"
            width={300}
            height={300}
            standalone={false}
            theme={VictoryTheme.material}
            data={chartData}
            x="subject"
            y="value"
            style={{
              data: {
                fill: ({ datum }) => {
                  if (datum.value >= 4) return "#4CAF50";
                  if (datum.value >= 3) return "#FFC107";
                  return "#F44336";
                },
              },
              labels: {
                fill: theme ? "white" : "black",
                fontSize: 12,
              },
            }}
            animate={{
              duration: 500,
              onLoad: { duration: 500 },
            }}
          />
        </g>

        {/* Gráfico de Barras */}
        <g transform={"translate(400, -20)"}>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={25}
            width={400}
            height={400}
            standalone={false}
          >
            <VictoryAxis
              style={{
                axis: { stroke: theme ? "#fff" : "#000" },
                tickLabels: {
                  fontSize: 12,
                  fill: theme ? "#fff" : "#000",
                },
              }}
            />
            <VictoryAxis
              dependentAxis
              domain={[0, 5]}
              tickValues={[0, 1, 2, 3, 4, 5]}
              style={{
                axis: { stroke: theme ? "#fff" : "#000" },
                tickLabels: {
                  fontSize: 12,
                  fill: theme ? "#fff" : "#000",
                },
                grid: { stroke: theme ? "#555" : "#ccc" },
              }}
            />
            <VictoryBar
              name="bar"
              data={chartData}
              x="subject"
              y="value"
              style={{
                data: {
                  fill: ({ datum }) => {
                    if (datum.value >= 4) return "#4CAF50";
                    if (datum.value >= 3) return "#FFC107";
                    return "#F44336";
                  },
                  width: 30,
                },
              }}
              animate={{
                duration: 500,
                onLoad: { duration: 500 },
              }}
            />
          </VictoryChart>
        </g>
      </VictorySharedEvents>
    </svg>
  );
};
