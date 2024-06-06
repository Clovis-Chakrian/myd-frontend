import React from "react";
import { DisconnectOutlined } from "@ant-design/icons";
import styles from "./Tags.module.css";

export const Tags = ({ numero, cor, title, desafios }) => {
  const estilo = {
    backgroundColor: cor,
    width: 150,
    height: 190,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeigth: "bold",
    marginLeft: "10px",
    marginTop: "10px",
  };

  return (
    <div className={styles.tags} style={estilo}>
      <span className={styles.title}>{title}</span>
      <br />
      <span className={styles.number}>{numero}</span>
      <br style={{ marginTop: "5px" }} />
      <span className={styles.desafio}>
        <DisconnectOutlined className={styles.icon} />
        {desafios} Desafios
      </span>
    </div>
  );
};
