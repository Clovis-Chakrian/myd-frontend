import React from "react";
import { Progress } from "antd";
import styles from "./SolidProgress.module.css";

export const SolidProgress = ({ name, progress }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{name}</div>
      <Progress
        percent={progress}
        showInfo={false}
        strokeColor="#76c7c0"
        className={styles.progressBar}
      />
    </div>
  );
};
