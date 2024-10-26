import styles from "../../styles/landing/secondsection.module.css";
import { useState } from "react";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore.jsx";

const RenderTarget = ({ state, setshow, keyName, title, children,src }) => {
  const { theme } = preferenceStore();

  return (
    <div className={`${styles[state ? "show-target" : "hide-target"]}`}>
      <div
        onClick={() =>
          setshow((prev) => ({ ...prev, [keyName]: !prev[keyName] }))
        }
        className={styles["title-target"]}
      >
        <h4 style={{ color: theme ? "#d7dcf8" : "#303755" }}>
          <span>
            <img src={src} alt="imagen servicio" />
          </span>
          <span>{title}</span>
        </h4>

        <div className={styles["handle-togle"]}>
          <img
            src="https://img.icons8.com/material-sharp/28/12B886/chevron-down.png"
            alt="handle"
          />
        </div>
      </div>
      <div className={styles["list-signature"]}>{children}</div>
    </div>
  );
};

const UlTargets = ({ li }) => {
  return <ul className={styles["ul-children"]}>{li}</ul>;
};

const Renderli = ({ br, li, state }) => {
  return (
    <li style={{ color: state ? "#d7dcf8" : "#334b4a" }}>
      <b> {br}</b> {li}
    </li>
  );
};

const RenderAhorro = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli state={state} li={"Conceptos Básicos de Ahorro"} />
          <Renderli state={state} li={"Planificación de Metas Financieras"} />
          <Renderli state={state} li={"Gestión de Gastos Personales"} />
          <Renderli state={state} li={"Herramientas Digitales para Ahorrar"} />
          <Renderli
            state={state}
            li={"Emergencias Financieras, Fondo de Ahorro"}
          />
        </>
      }
    />
  );
};

const RenderInversion = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli state={state} li={"¿Qué es Invertir? Conceptos Básicos"} />
          <Renderli state={state} li={"Introducción a la Bolsa de Valores"} />
          <Renderli state={state} li={"Bonos, Acciones y Criptomonedas"} />
          <Renderli state={state} li={"Inversiones de Bajo Riesgo"} />
          <Renderli
            state={state}
            li={"Simulación de Portafolio de Inversiones"}
          />
        </>
      }
    />
  );
};

const RenderEmprend = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli state={state} li={"¿Cómo Crear un Emprendimiento?"} />
          <Renderli state={state} li={"Elaboración de Planes de Negocio"} />
          <Renderli
            state={state}
            li={"Fuentes de Financiamiento para Emprendedores"}
          />
          <Renderli state={state} li={"Gestión de Recursos en un Negocio"} />
          <Renderli
            state={state}
            li={"Innovación y Emprendimiento Tecnológico"}
          />
        </>
      }
    />
  );
};

const RenderJuegos = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli state={state} li={"Juegos sobre Ahorro y Finanzas"} />
          <Renderli state={state} li={"Desafíos de Presupuesto Mensual"} />
          <Renderli
            state={state}
            li={"Simulación de Manejo de Dinero en la Vida Real"}
          />
          <Renderli
            state={state}
            li={"Campeonatos Financieros: Compite con tus Amigos"}
          />
          <Renderli state={state} li={"Retos Regionales y Nacionales"} />
        </>
      }
    />
  );
};

const RenderEducacion = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli state={state} li={"Introducción a las Fintech"} />
          <Renderli
            state={state}
            li={"Big Data y su Uso en las Finanzas Personales"}
          />
          <Renderli
            state={state}
            li={"Herramientas Digitales para la Gestión de Presupuestos"}
          />
          <Renderli
            state={state}
            li={"Seguridad Digital en Transacciones Financieras"}
          />
          <Renderli state={state} li={"Blockchain y Criptomonedas"} />
        </>
      }
    />
  );
};

const RenderNivel = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          <Renderli
            state={state}
            br={" Grado 9º: "}
            li={"Fundamentos Financieros"}
          />
          <Renderli
            state={state}
            br={"Grado 10º:"}
            li={" Gestión de Presupuesto y Ahorro"}
          />
          <Renderli
            state={state}
            br={"Grado 11º:"}
            li={" Inversiones y Emprendimiento"}
          />
        </>
      }
    />
  );
};

const RenderResDoc = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli
            state={state}
            br={"Formación Inicial:"}
            li={"Capacitación en Educación Financiera"}
          />
          <Renderli
            state={state}
            br={"Recursos Didácticos:"}
            li={"Guías y Simulaciones para Clases"}
          />
          <Renderli
            state={state}
            br={"Evaluaciones:"}
            li={"Herramientas para Monitoreo del Progreso Estudiantil"}
          />
          <Renderli
            state={state}
            br={"Retroalimentación con Big Data:"}
            li={"Análisis Personalizado del Rendimiento"}
          />
        </>
      }
    />
  );
};

const RenderResFam = ({ state }) => {
  return (
    <UlTargets
      li={
        <>
          {" "}
          <Renderli
            state={state}
            br={"Charlas y Talleres:"}
            li={" Cómo Fomentar Hábitos Financieros en Casa"}
          />
          <Renderli
            state={state}
            br={"Guías de Ahorro Familiar: "}
            li={"Elaboración de Presupuestos Hogareños"}
          />
          <Renderli
            state={state}
            br={"Acceso a la Plataforma:"}
            li={"Seguimiento del Progreso de los Estudiantes"}
          />
        </>
      }
    />
  );
};

export const SecondSection = () => {
  const { theme } = preferenceStore();
  const [show, setShow] = useState({
    ahorro: false,
    math2: false,
    ciencias: false,
    finanzas: false,
    computacion: false,
    masttros: false,
    juegos: false,
    educacion: false,
  });

  return (
    <div className={styles["second"]}>
      <div className={styles["content-targets"]}>
        <div className={styles["l-target"]}>
          <RenderTarget
            state={show.ahorro}
            setshow={setShow}
            keyName="ahorro"
            src={"https://img.icons8.com/dusk/48/money-box--v1.png"}
            title={" Ahorro y Finanzas Personales"}
            children={<RenderAhorro state={theme} />}
          />
          <RenderTarget
            state={show.math2}
            setshow={setShow}
            keyName="math2"
            src={"https://img.icons8.com/color/48/total-sales-1.png"}
            title={" Inversión y Crecimiento del Capital"}
            children={<RenderInversion state={theme} />}
          />
          <RenderTarget
            state={show.ciencias}
            setshow={setShow}
            keyName="ciencias"
            src={
              "https://img.icons8.com/external-filled-color-icons-papa-vector/48/external-Complete-Business-Plan-business-planning-filled-color-icons-papa-vector.png"
            }
            title={"Emprendimiento y Planificación de Negocios"}
            children={<RenderEmprend state={theme} />}
          />

          <RenderTarget
            state={show.juegos}
            setshow={setShow}
            keyName="juegos"
            src={"https://img.icons8.com/officel/48/leaderboard.png"}
            title={"Competencias y Juegos Interactivos"}
            children={<RenderJuegos state={theme} />}
          />
        </div>

        <div className={styles["r-target"]}>
          <RenderTarget
            src={
              "https://img.icons8.com/nolan/48/financial-dynamic-presentation.png"
            }
            state={show.educacion}
            setshow={setShow}
            keyName="educacion"
            title="Educación Tecnológica Aplicada a Finanzas"
            children={<RenderEducacion state={theme} />}
          />
          <RenderTarget
            state={show.finanzas}
            setshow={setShow}
            keyName="finanzas"
            src={"https://img.icons8.com/fluency/48/groups--v1.png"}
            title={"Por Nivel Educativo"}
            children={<RenderNivel state={theme} />}
          />
          <RenderTarget
            state={show.computacion}
            setshow={setShow}
            keyName="computacion"
            src={
              "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-analysis-human-resources-flaticons-lineal-color-flat-icons.png"
            }
            title="Recursos para Docentes"
            children={<RenderResDoc state={theme} />}
          />
          <RenderTarget
            state={show.maestros}
            setshow={setShow}
            keyName="maestros"
            src={
              "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-human-resources-job-search-flaticons-lineal-color-flat-icons-2.png"
            }
            title="Recursos para Padres de Familia"
            children={<RenderResFam state={theme} />}
          />
        </div>
      </div>
    </div>
  );
};
