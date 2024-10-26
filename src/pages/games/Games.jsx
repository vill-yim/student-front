import style from "../../styles/games/game.module.css";
import { GamesComponent } from "../../components/juegos/GamesComponent";


export const Games = () => {
  return (
    <div className={style['content-game']}><GamesComponent/></div>
  )
}
