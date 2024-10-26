// GamesComponent.jsx
import React, { useMemo } from "react";
import style from "../../styles/games/game.module.css";
import { preferenceStore } from "../../utils/storage/preferences/preferenceStore";

const GameCard = React.memo(({ game, theme }) => {
  return (
    <div className={style["game-card"]}>
      <div className={style["game-iframe-container"]}>
        <iframe
          src={game.url}
          className={style["game-iframe"]}
          title={game.title}
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
      <div
        className={style["game-info"]}
        style={{
          backgroundColor: theme ? "#3a3842" : "#ffffff",
          color: theme ? "#ffffff" : "#333",
        }}
      >
        <h3
          className={style["game-title"]}
          style={{ color: theme ? "#ffffff" : "#333" }}
        >
          {game.title}
        </h3>
        <span className={style["game-category"]}>{game.category}</span>
      </div>
    </div>
  );
});

export const GamesComponent = () => {
  const { theme } = preferenceStore();

  const games = useMemo(
    () => [
      {
        id: 1,
        title: "Pacman",
        url: "https://funhtml5games.com/pacman/index.html",
        category: "Arcade Classic",
      },
      {
        id: 2,
        title: "Math Games",
        url: "https://www.mathgames.com/",
        category: "Education",
      },
      {
        id: 3,
        title: "Funbrain",
        url: "https://www.funbrain.com/",
        category: "Education",
      },
      {
        id: 4,
        title: "2048",
        url: "https://funhtml5games.com/2048/index.html",
        category: "Puzzle",
      },
      {
        id: 5,
        title: "Solitaire",
        url: "https://solitaire.com/embed",
        category: "Cards",
      },
      {
        id: 6,
        title: "Sudoku",
        url: "https://sudoku.com/embed",
        category: "Puzzle",
      },
    ],
    []
  );

  return (
    <div
      style={{ backgroundColor: theme ? "#302e34" : "#f5f5f5" }}
      className={style["all-games"]}
    >
      <h1 className={style.title} style={{ color: theme ? "#ffffff" : "#333" }}>
       Juegos Educativos
      </h1>
      <div className={style["games-grid"]}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} theme={theme} />
        ))}
      </div>
    </div>
  );
};
