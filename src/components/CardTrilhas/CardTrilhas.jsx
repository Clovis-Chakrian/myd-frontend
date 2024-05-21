import React, { useState } from "react";
import styles from "./CardTrilhas.module.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

export const CardTrilhas = ({ text, imageUrl }) => {
    return (
        <Card hoverable className={styles.card}>
            <Link to="/home">
                <div className={styles.divCard}>
                <div>
                    <h3 className={styles.h3Card}>{text}</h3>
                </div>
                <div style={{ maxWidth:200, maxHeight:100}}>
                    <img className={styles.imgCard} src={imageUrl} alt="Imagem"/>
                </div>
                </div>
            </Link>
        </Card>
    );
  };