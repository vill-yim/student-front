import style from "../../styles/classes/clases.module.css";
import { SectionCategory, ClassVideos } from "../user/cover/SectionCategory";

export const Clase = () => {
  return (
    <div className={style["content-class"]}>
      <SectionCategory
        category_class={"Clases de Informatica"}
        children={
          <>
            <ClassVideos
              links={
                "https://www.youtube.com/watch?v=mpIwKBNr7_o&list=PL2Z95CSZ1N4HXvLWg8oL4IpyJx27HafcD"
              }
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=Rv910T1BJUw"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=tVBb79WLScc"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=CCfdb0C9bCA"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=y1ply3gtDO8"}
            />
          </>
        }
      />

      <SectionCategory
        category_class={"Clases de Mátematicas"}
        children={
          <>
            <ClassVideos
              links={"https://www.youtube.com/watch?v=Qr98YD4bvXE"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=V33U1OsFVnQ"}
            />
            <ClassVideos
              links={
                "https://www.youtube.com/watch?v=LgMptyzudXU&list=RDQMZ2Ju89pfxX0&start_radio=1"
              }
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=ub-YKU8XUZ4"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=KyjjFYM8aUg"}
            />
          </>
        }
      />
      <SectionCategory
        category_class={"Clases de Ciencia"}
        children={
          <>
            <ClassVideos
              links={"https://www.youtube.com/watch?v=ca0V91ExwDk"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=LGIffUnJvsU"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=Pchq4FsIteg"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=HD0Hv9A3md4"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=-vk7F-qS1UI"}
            />
          </>
        }
      />

      <SectionCategory
        category_class={"Clases de Biología"}
        children={
          <>
            <ClassVideos
              links={"https://www.youtube.com/watch?v=X2Z-0e5maKw"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=JLNokMENF6s"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=sluusvstA68"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=PsmXp_HomhM"}
            />
            <ClassVideos
              links={"https://www.youtube.com/watch?v=81f3xFT0ca8"}
            />
          </>
        }
      />
    </div>
  );
};
