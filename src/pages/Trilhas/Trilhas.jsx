import React, { useState } from "react";
import img from "../../../public/icons/imgCadastro.png";
import logo from "../../../public/icons/logo.png";
import styles from "./Trilhas.module.css";
import { Card } from "antd";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import InteracaoSocial from "./TrilhasImg/Mask group (1).png"
import rotinaSaudavel from "./TrilhasImg/Mask group (2).png"
import  praticasGratidao from "./TrilhasImg/Mask group (3).png"
import conexaoNatureza from "./TrilhasImg/Mask group (4).png"
import trabalhoComunitario from "./TrilhasImg/Mask group (5).png"
import relaxamento from "./TrilhasImg/Mask group.png"

const CardTrilhas = ({ text, imageUrl }) => {
    return (
      <Card hoverable className={styles.card}>
        <div className={styles.divCard}>
          <div>
            <h3 className={styles.h3Card}>{text}</h3>
          </div>
          <div style={{ maxWidth:200, maxHeight:100}}>
            <img className={styles.imgCard} src={imageUrl} alt="Imagem"/>
          </div>
        </div>
      </Card>
    );
  };

export const Trilhas = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h2 className={styles.subtitulo}>Para começarmos, escolha uma trilha abaixo : </h2>
      </div>
      <div className={styles.conjuntoTrilhas}>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
      </div>
    </div>
  );
};
