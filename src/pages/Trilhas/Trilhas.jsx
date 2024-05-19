import React, { useState } from "react";
import logo from "../../../public/icons/logo.png";
import styles from "./Trilhas.module.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
import InteracaoSocial from "./TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "./TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "./TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "./TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "./TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "./TrilhasImg/trilhaRelaxamento.png";

const CardTrilhas = ({ text, imageUrl }) => {
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

export const Trilhas = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h2 className={styles.subtitulo}>Para começarmos, escolha uma trilha abaixo : </h2>
      </div>
      <div className={styles.conjuntoTrilhas}>
        <CardTrilhas text="Relaxamento" imageUrl={relaxamento}></CardTrilhas>
        <CardTrilhas text="Interação Social" imageUrl={InteracaoSocial}></CardTrilhas>
        <CardTrilhas text="Rotina Saúdavel" imageUrl={rotinaSaudavel}></CardTrilhas>
        <CardTrilhas text="Praticar Gratidão" imageUrl={praticarGratidao}></CardTrilhas>
        <CardTrilhas text="Conexão com a Natureza" imageUrl={conexaoNatureza}></CardTrilhas>
        <CardTrilhas text="Trabalho Comunitário" imageUrl={trabalhoComunitario}></CardTrilhas>
      </div>
    </div>
  );
};
