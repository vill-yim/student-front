import ReactPlayer from "react-player";
import styles from "../../../styles/user/category.module.css";
import { useState, useEffect, useRef } from "react";
import { preferenceStore } from "../../../utils/storage/preferences/preferenceStore";

const ComponentCategory = ({ category, children }) => {
  const { theme } = preferenceStore();
  return (
    <div className={styles["component-category"]}>
      <h3 style={{ color: theme ? "#fff6ff" : "#303755" }}>{category}</h3>
      <div
        className={styles["category-video"]}
      >
        {children}
      </div>
    </div>
  );
};

const ClassVideos = () => {
  return (
    <div className={styles["video"]}>
      <ReactPlayer
        width={250}
        height={250}
        style={{ borderRadius: "22px" }}
        className={styles["video-player"]}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
    </div>
  );
};

export const SectionCategory = () => {
  return (
    <div className={styles["content-main-category"]}>
      <div className={styles["category-instituto"]}>
        <ComponentCategory category={"Clases de Biología:"}>
          <ClassVideos />
          <ClassVideos />
          <ClassVideos />
          <ClassVideos />
          <ClassVideos />
        </ComponentCategory>
      </div>
    </div>
  );
};

/*
        <ComponentCategory category={"Juegos de plataformas:"}>
          <iframe
            src="https://html5.gamedistribution.com/091eea79ee9948c8be4ca2a69b5a0914/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="GameDistribution Game"
            onSclogin={false}
            allowFullScreen
          />
          <iframe
            width="100%"
            height="100%"
            onSclogin={false}
            src="https://html5.gamedistribution.com/944186abe50e452dac7f0e8d3e0a8814/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
          ></iframe>

          <iframe
            width="100%"
            height="100%"
            onSclogin={false}
            src="https://html5.gamedistribution.com/dd9701cd84da40699cdc404645f29c1f/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
          ></iframe>
          <iframe
            width="100%"
            height="100%"
            src="https://html5.gamedistribution.com/9ec319450435426daa47f50331d8e3dc/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"
          ></iframe>
        </ComponentCategory>
         */
