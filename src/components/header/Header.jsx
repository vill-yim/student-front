import { Link, } from "react-router-dom";
import { useEffect, useState } from "react";
import styleHeader from "../../styles/header/header.module.css";
import { useUserStorage } from "../../utils/storage/login/useUserStorage";
import { useLocation } from "react-router-dom";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";

export const Header = () => {
  const data = useUserStorage();
  const { aside } = preferenceStore();
  const [date, setDate] = useState({ day: 0, month: 0, year: 0 });
  const [profileNav, setProfileNav] = useState(false);
  const [home, setHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      setDate({
        day: day,
        month: month,
        year: year,
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    if (location.pathname === "/login") {
      setHome(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [location.pathname]);

  const RenderInputHeader = () => {
    return (
      <div className={`${styleHeader["menu-nav-select"]} }`}>
        <label htmlFor="search">
          <img src="https://img.icons8.com/officel/25/search--v1.png" alt="" />
        </label>
        <input type="text" placeholder="¿Qué estás buscando?" />
      </div>
    );
  };

  //funciones
  const viewOptionProfile = () => {
    setProfileNav(() => !profileNav);
  };

  const logOut = () => {
    data?.setLogout(setProfileNav);
    useUserStorage.persist.clearStorage();
    window.location.href = "/";
  };

  return (
    <div
      className={`${
        styleHeader[data?.login ? "header-logined" : "content-header"]
      }`}
    >
      <div className={styleHeader["date"]}>
        {data?.login ? (
          <div className={styleHeader["calendar-header"]}>
            <img
              src="https://img.icons8.com/fluency/28/calendar--v1.png"
              alt=""
            />
            {aside && (
              <p>
                {date.day}/{date.month}/{date.year}
              </p>
            )}
          </div>
        ) : (
          <img src="/logo/logo.png" alt="logo" />
        )}
      </div>

      {data?.login ? (
        <div className={styleHeader["menu-nav"]}>
          <RenderInputHeader />
        </div>
      ) : (
        <>
          {home && (
            <Link to={"/"} className={styleHeader["img-inicio"]}>
              <img
                onClick={() => setHome(false)}
                src="https://img.icons8.com/ios/35/C850F2/exterior.png"
                alt="inicio"
              />{" "}
            </Link>
          )}
        </>
      )}

      <div className={styleHeader["register-login"]}>
        {data?.login ? (
          <div className={styleHeader["loginup"]}>
            <div className={styleHeader["notifications"]}>
              <img
                src="https://img.icons8.com/ios/35/22C3E6/bell.png"
                alt="notificaciones"
              />
              <img
                src="https://img.icons8.com/ios/35/22C3E6/speaker_1.png"
                alt="alertass"
              />
            </div>

            <div
              onClick={viewOptionProfile}
              className={styleHeader["img-profile"]}
              style={{
                backgroundImage: `url('${data?.res?.profile_img}')`,
              }}
            />

            {data?.login && profileNav && (
              <div className={styleHeader["menu-logout"]}>
                <ul>
                  <li>Perfil</li>
                  <li>Configuracion</li>
                  <li>Preferencias</li>
                  <li onClick={logOut}>Cerrar Sesión</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className={styleHeader["count"]}>
            <Link to={"/login"}>
              <div className={styleHeader["tooltip-container"]}>
                <div className={styleHeader["button-content"]}>Ingresar</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
