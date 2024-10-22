import styles from "../../../styles/user/firtscover.module.css";

const Targets = ({ nombre, credit, src }) => {
  return (
    <div className={styles["target"]}>
      <div
        className={styles["target-img"]}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <div className={styles["target-descrip"]}>
          <div style={{ height: "25px", color: "#fff6ff" }}>{nombre}</div>
          <div>
            <img
              src="https://img.icons8.com/color/12/cheap-2--v1.png"
              alt="cheap-2--v1"
            />{" "}
            <b>{credit}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlexFirstCover = () => {
  return (
    <div className={styles["content-section"]}>
      <div className={styles["l-section"]}>
        <div className={styles["l-up-div"]}>
          <h3>actividades sociales</h3>

          <div className={styles["evento-flex"]}>
            <div className={styles["carrusel"]}>
              <div
                className={styles["img-carrusel"]}
                style={{
                  backgroundImage: "url('../../../public/pages/evento.jpg')",
                }}
              />
            </div>

            <div className={styles["descrip-evento"]}>
              <p>
                <span>
                  Haz parte de las mejores reuniones sociales & no te pierdas
                  niguna de sus emocionantes reuniones.
                </span>
                <br /> <br />
                <button>Ver más...</button>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["l-down-div"]}>
          <p>
            Personaliza tu app de acuerdo a tus preferencias y encuentra en lo
            que mas destacas
          </p>
          <span>
            <img
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-preschool-kids-learning-toys-for-the-alphabets-school-shadow-tal-revivo.png"
              alt="external-preschool-kids-learning-toys-for-the-alphabets-school-shadow-tal-revivo"
            />
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/42/external-discount-office-and-office-supplies-flaticons-lineal-color-flat-icons-2.png"
              alt="external-discount-office-and-office-supplies-flaticons-lineal-color-flat-icons-2"
            />
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/external-chalk-board-design-tools-xnimrodx-blue-xnimrodx.png"
              alt="external-chalk-board-design-tools-xnimrodx-blue-xnimrodx"
            />
          </span>
        </div>
      </div>
      <div className={styles["r-section"]}>
        <div className={styles["r-up-div"]}>
          <div className={styles["title-rec"]}>
           
            <h3>Los mas reconocidos</h3>{" "}
          </div>

          <div className={styles["targets-content"]}>
            <Targets
              src={"https://img.icons8.com/doodle/50/user.png"}
              credit={1323}
              nombre={"Jean Perez"}
            />{" "}
            <Targets
              src={"https://img.icons8.com/doodle/48/user-female-red-hair.png"}
              credit={1223}
              nombre={"meria sosa"}
            />
            <Targets
              src={"https://img.icons8.com/color/50/user.png"}
              credit={1123}
              nombre={"Ilustro zapata"}
            />
            <Targets
              src={"https://img.icons8.com/color/48/guest-male--v1.png"}
              credit={1223}
              nombre={"Mentino estora"}
            />
            <Targets
              src={"https://img.icons8.com/clouds/100/guest-male.png"}
              credit={1323}
              nombre={"Jhon Doe"}
            />
            <Targets
              src={"https://img.icons8.com/doodle/48/girl.png"}
              credit={1323}
              nombre={"Jean cardos"}
            />
            <Targets
              src={"https://img.icons8.com/office/40/guest-male--v1.png"}
              credit={1323}
              nombre={"Megan alonzo"}
            />
            <Targets
              src={"https://img.icons8.com/doodle/48/businesswoman--v1.png"}
              credit={1323}
              nombre={"Arosa pestia"}
            />
            <Targets
              src={"https://img.icons8.com/isometric/50/user.png"}
              credit={1323}
              nombre={"jose rubino"}
            />
            <Targets
              src={
                "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-female-new-media-flaticons-flat-flat-icons-2.png"
              }
              credit={1323}
              nombre={"aura meria"}
            />
          </div>
        </div>
        <div className={styles["r-down-div"]}>
          <div className={styles["r-gift"]}>
            <p>
              Obten regalos, descuentos y premios por tus logros!!!
              <br />
              Recuerda que mientras mas creditos tengas mmejores cosas te
              esperan.
              <button>ver maś...</button>
            </p>
          </div>
          <div className={styles["l-gift"]}>
            <div
              className={styles["img-bksh"]}
              style={{
                backgroundImage: "url('../../../public/pages/schoolbk.jpeg')",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
