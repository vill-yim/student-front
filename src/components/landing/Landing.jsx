import style from "../../styles/landing/landing.module.css";
import { Cover } from "./Cover";
import { PreFooter } from "./Prefooter";
import { SecondSection } from "./SecondSection";

export const Landing = () => {

  return (
    <div className={style["content-cover"]}>
      <div className={style["cover"]}>
        <Cover />
      </div>

      <div className={style["second-section"]}>
        <SecondSection />
      </div>
      <div className={style["prefooter"]}>
        <PreFooter />
      </div>
    </div>
  );
};
