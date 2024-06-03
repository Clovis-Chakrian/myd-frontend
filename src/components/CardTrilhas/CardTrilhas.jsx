import React from "react";
import styles from "./CardTrilhas.module.css";
import { Card } from "antd";

export const CardTrilhas = ({ text, imageUrl, onClick, isSelected }) => {
  return (
    <Card
      hoverable
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <div className={styles.divCard}>
        <div>
          <h3 className={styles.h3Card}>{text}</h3>
        </div>
        <div style={{ maxWidth: 200, maxHeight: 100 }}>
          <img className={styles.imgCard} src={imageUrl} alt="Imagem" />
        </div>
      </div>
    </Card>
  );
};
