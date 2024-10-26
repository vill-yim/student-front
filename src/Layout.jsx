import style from "./App.module.css";
import { Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { useLocation } from "react-router-dom";
import { SubHeader } from "./components/header/SubHeader";
import { preferenceStore } from "./utils/storage/preferences/preferenceStore";
import { useUserStorage } from "./utils/storage/login/useUserStorage";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const { setAside, aside, theme } = preferenceStore();
  const { login, res } = useUserStorage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById("pages") > 200) {
        console.log("scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {login && (
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
                    backgroundImage: `url('${res?.profile_img}')`,
                  }}
                  className={style["img-profile"]}
                />
                <span>
                  <h3 className={style[theme ? "li-dk" : "li-lg"]}>
                    ¡ Hola, {res?.name} <br />
                    {res?.lastname} !
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
                src={"https://img.icons8.com/pulsar-color/35/home.png"}
                alt={"inicio"}
                name={"inicio"}
              />
              <RenderLi
                route={"/class"}
                src={
                  "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/35/external-video-stay-at-home-xnimrodx-lineal-color-xnimrodx.png"
                }
                alt={"clases"}
                name={"Clases & Tareas"}
              />

              <RenderLi
                route={"/calendario"}
                src={
                  "https://img.icons8.com/external-vectorslab-flat-vectorslab/35/external-Schedule-business-and-finance-vectorslab-flat-vectorslab.png"
                }
                alt={"calendario"}
                name={"Calendario"}
              />

              <RenderLi
                route={"/games"}
                src={"https://img.icons8.com/color/35/joystick.png"}
                alt={"games"}
                name={"games"}
              />

              <RenderLi
                route={"/informes"}
                src={
                  "https://img.icons8.com/external-soft-fill-juicy-fish/35/external-data-marketing-soft-fill-soft-fill-juicy-fish-3.png"
                }
                alt={"informes"}
                name={"Informes"}
              />
              <RenderLi
                route={"/chat"}
                src={"https://img.icons8.com/color/35/chat--v1.png"}
                alt={"chat"}
                name={"Chat"}
              />
            </ul>
          </div>
        </div>
      )}

      <div
        style={{ background: `${theme ? "#302e34" : "#f5f5f5"}` }}
        className={style["content"]}
      >
        <div
          style={{ position: aside ? "sticky" : "" }}
          className={style["header"]}
        >
          <SubHeader />
          <Header />
        </div>
        <div
          className={`${
            (location.pathname && style["location-animate"], style["pages"])
          }`}
          id="pages"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
