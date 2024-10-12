import { useEffect, useState } from "react";
import subStyle from "../../styles/header/subheader.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";

export const SubHeader = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setTime(`${hour}:${minutes}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const { theme, setDark, setLight } = preferenceStore();

  return (
    <div
      className={`${subStyle[theme ? "sub-hlg" : "sub-hdk"]}  ${
        subStyle["sub-header"]
      }`}
    >
      <div className={subStyle["tittle-subheader"]}>
        <h2>{time}</h2>
      </div>
      <div className={subStyle["change-theme"]}>
        {theme ? (
          <img
            onClick={() => setDark()}
            width="35"
            height="30"
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/35/FFFFFF/external-sun-summer-tanah-basah-basic-outline-tanah-basah.png"
            alt="sun--v1"
          />
        ) : (
          <img
            onClick={() => setLight()}
            width="35"
            height="30"
            src="https://img.icons8.com/ios/35/FFFFFF/crescent-moon.png"
            alt="crescent-moon"
          />
        )}
      </div>
    </div>
  );
};

/*.color1 {color: #00000e;}
.color2 {color: #1b2b4c;}
.color3 {color: #4c5a98;}
.color4 {color: #8d8fee;}
.color5 {color: #dfc9ff;} 

*/
