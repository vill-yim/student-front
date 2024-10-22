import {
  VictoryBar,
  VictoryPie,
  VictoryLabel,
  VictorySharedEvents,
} from "victory";

import style from "../../../styles/user/coverUser.module.css";
import { useState } from "react";

const RenderBars = ({ children }) => {
  return (
    <div className={style["content-targets"]}>
      {" "}
      <div className={style["target"]}> {children}</div>
    </div>
  );
};

const RenderCover = () => {
  const [observation, setObservation] = useState(null);

  const Victory = (
    <VictoryBar
      data={[
        { x: 1, y: 2, label: "A" },
        { x: 2, y: 4, label: "B" },
        { x: 3, y: 7, label: "C" },
        { x: 4, y: 3, label: "D" },
        { x: 5, y: 5, label: "E" },
        { x: 6, y: 4, label: "f" },
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
                    return props.text === "clicked" ? null : console.log(state);
                  },
                },
              ];
            },
          },
        },
      ]}
    />
  );

  return (
    <div className={style["content-bars"]}>
      <div className={style["bars"]}>
        <div className={style["title"]}>
          <h3>Promedio por Materias</h3>
        </div>

        <div className={style["content-targets"]}>
          <div className={style["targets-scroll"]}>
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
            <RenderBars children={Victory} />
          </div>

          <div className={style["mesages-tables"]}>
            <p>
              Tu profesor dice esto: <br /><span>{observation}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderAsideCover = () => {
  return (
    <div className={style["aside"]}>
      <div className={style["title-aside"]}>title</div>

      <div className={style["text-aside"]}>aside</div>
    </div>
  );
};

const CoverUser = () => {
  return (
    <div className={style["renders"]}>
      <RenderCover />
      <RenderAsideCover />
    </div>
  );
};

export default CoverUser;

/*
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
*/

/*
 <RenderBar>
            <VictoryBar
              data={[
                { x: 1, y: 2, label: "A" },
                { x: 2, y: 4, label: "B" },
                { x: 3, y: 7, label: "C" },
                { x: 4, y: 3, label: "D" },
                { x: 5, y: 5, label: "E" },
              ]}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          target: "labels",
                          mutation: (props) => {
                            return props.text === "clicked"
                              ? null
                              : { text: "clicked" };
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </RenderBar>
*/
