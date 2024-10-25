import styles from "../../styles/landing/secondsection.module.css";
import { useState } from "react";

const RenderTarget = ({ state, setshow, keyName,title }) => {
  return (
    <div className={`${styles[state ? "show-target" : "hide-target"]}`}>
      <div
        onClick={() =>
          setshow((prev) => ({ ...prev, [keyName]: !prev[keyName] }))
        }
        className={styles["title-target"]}
      >
        <h4>
          <span>
            <img
              src="https://img.icons8.com/external-flat-icons-inmotus-design/45/external-Calculator-calculator-flat-icons-inmotus-design-11.png"
              alt="matematicas img"
            />
          </span>
          <span>{title}</span>
        </h4>

        <div className={styles["handle-togle"]}>
          <img
            src="https://img.icons8.com/windows/32/7950F2/chevron-down.png"
            alt="handle"
          />
        </div>
      </div>
      <div className={styles["list-signature"]}>
        <ul>
          <li> contendio de la target</li>
        </ul>
      </div>
    </div>
  );
};

export const SecondSection = () => {
  const [show, setShow] = useState({
    math: false,
    math2: false,
    ciencias: false,
    finanzas: false,
    computacion: false,
    masttros: false,
  });

  return (
    <div className={styles["second"]}>
      <div className={styles["content-targets"]}>
        <div className={styles["l-target"]}>
          <RenderTarget
            state={show.math}
            setshow={setShow}
            keyName="math"
            title={" Mátematicas"}
          />
          <RenderTarget
            state={show.math2}
            setshow={setShow}
            keyName="math2"
            title={" Mátematicas por grado"}
          />
          <RenderTarget
            state={show.ciencias}
            setshow={setShow}
            keyName="ciencias"
            title={"Ciencias"}
          />
        </div>

        <div className={styles["r-target"]}>
          <RenderTarget
            state={show.finanzas}
            setshow={setShow}
            keyName="finanzas"
            title={"Finanzas"}
          />
          <RenderTarget
            state={show.computacion}
            setshow={setShow}
            keyName="computacion"
            title="Computacion"
          />{" "}
          <RenderTarget
            state={show.maestros}
            setshow={setShow}
            keyName="maestros"
            title="Maestros"
          />
        </div>
      </div>
    </div>
  );
};
