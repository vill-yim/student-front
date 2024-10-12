import style from "./App.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "./components/header/Header";
import { useLocation } from "react-router-dom";
import { SubHeader } from "./components/header/SubHeader";
import { preferenceStore } from "./utils/storage/preferences/preferenceStore";
import { userStorage } from "./utils/storage/login/loginStorage";

export const Layout = ({ children }) => {
  const { setAside, aside, theme } = preferenceStore();
  const { roll } = userStorage();
  const location = useLocation();

  const RenderLi = ({ route, src, alt, name }) => {
    return (
      <li>
        <Link
          to={route}
          className={`${style[theme ? "li-dk" : "li-lg"]} ${style["links"]} ${
            location.pathname === route && style["active"]
          }`}
        >
          <span>
            <img src={src} alt={alt} />
          </span>
          <span className={`${style[aside && "show-profile"]} `}>{name}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className={style["content-app"]}>
      {roll && (
        <div
          className={`${style[theme ? "aside-dk" : "aside-lg"]} ${
            style["aside"]
          } ${aside && style["hide-aside"]}`}
        >
          <div
            className={style["toggle-aside"]}
            onClick={() => setAside(!aside)}
          >
            {aside ? (
              <img
                src="https://img.icons8.com/fluency/35/menu--v1.png"
                alt="menu--v1"
              />
            ) : (
              <img
                src="https://img.icons8.com/officel/35/close-window.png"
                alt="return"
              />
            )}
          </div>

          <div
            className={`${style[aside ? "show-profile" : "hide-profile"]} ${
              style["profile-aside"]
            }`}
          >
            {!aside && (
              <>
                <div
                  style={{
                    backgroundImage:
                      'url("https://img.icons8.com/officel/120/test-account.png")',
                  }}
                  className={style["img-profile"]}
                />

                <span>
                  <h3 className={style[theme ? "li-dk" : "li-lg"]}>
                    ¡Bienvenido, <br /> Usuario!
                  </h3>
                </span>
              </>
            )}
          </div>
          <div
            className={`${style["list-aside"]}  ${
              style[theme ? "li-dk" : "li-lg"]
            }
          ${aside && style["welcome"]}
          `}
          >
            <ul>
              <RenderLi
                route={"/"}
                src={"https://img.icons8.com/pulsar-color/45/home.png"}
                alt={"inicio"}
                name={"inicio"}
              />
              <RenderLi
                route={"/ubicacion"}
                src={"https://img.icons8.com/fluency/45/location--v1.png"}
                alt={"ubicacion"}
                name={"Ubicación"}
              />
              <RenderLi
                route={"/calendario"}
                src={"https://img.icons8.com/color-glass/45/overtime--v1.png"}
                alt={"calendario"}
                name={"Calendario"}
              />
              <RenderLi
                route={"/informes"}
                src={"https://img.icons8.com/fluency/45/graph-report.png"}
                alt={"informes"}
                name={"Informes"}
              />
              <RenderLi
                route={"/chats"}
                src={"https://img.icons8.com/color/48/chat--v1.png"}
                alt={"chats"}
                name={"Chats"}
              />
            </ul>
          </div>
        </div>
      )}
    

      <div
        style={{ background: `${theme ? "#303755" : "#fff6ff"}` }}
        className={style["content"]}
      >
        <div className={style["header"]}>
          <SubHeader />
          <Header />
        </div>
        <div className={style["pages"]}> {children} </div>
      </div>
    </div>
  );
};
