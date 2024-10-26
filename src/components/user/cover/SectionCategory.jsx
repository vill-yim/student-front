import ReactPlayer from "react-player";
import styles from "../../../styles/user/category.module.css";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { preferenceStore } from "../../../utils/storage/preferences/preferenceStore";

const ComponentCategory = ({ category, children }) => {
  const { theme } = preferenceStore();
  return (
    <div className={styles["component-category"]}>
      <h3 style={{ color: theme ? "#fff6ff" : "#303755" }}>{category}</h3>
      <div className={styles["category-video"]}>{children}</div>
    </div>
  );
};

const VideoPlayer = ({ url, theme }) => {
  return (
    <div
      style={{ background: theme ? "#f7f7f777" : "#ffffff" }}
      className={styles["video"]}
    >
      <ReactPlayer
        width={200}
        height={200}
        style={{ borderRadius: "22px" }}
        className={styles["video-player"]}
        url={url}
      />
      <p>
        <span>
          <b>Tema de la clase:</b>
        </span>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </p>
    </div>
  );
};

const MemoizedVideoPlayer = React.memo(VideoPlayer);

export const ClassVideos = ({ links }) => {
  const { theme } = preferenceStore();
  const videoUrl = useMemo(() => links, [links]);

  return <MemoizedVideoPlayer url={videoUrl} theme={theme} />;
};

export const SectionCategory = ({ category_class, children }) => {
  return (
    <div className={styles["content-main-category"]}>
      <div className={styles["category-instituto"]}>
        <ComponentCategory category={category_class}>
          {children}
        </ComponentCategory>
      </div>
    </div>
  );
};
