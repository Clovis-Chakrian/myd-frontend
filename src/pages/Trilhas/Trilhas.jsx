import React, { useState } from "react";
import logo from "../../../public/icons/logo.png";
import styles from "./Trilhas.module.css";
import InteracaoSocial from "./TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "./TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "./TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "./TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "./TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "./TrilhasImg/trilhaRelaxamento.png";
import { CardTrilhas } from "../../components/CardTrilhas/CardTrilhas";


export const Trilhas = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.caixaSubTit}>
          <h2 className={styles.subtitulo}>Para começarmos, escolha uma trilha abaixo : </h2>
        </div>
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
