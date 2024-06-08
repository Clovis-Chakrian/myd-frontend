import { Col, Progress, Row } from "antd";
import React, { useState, useEffect } from "react";
import { ButtonEmoji } from "../../components/ButtonEmoji/ButtonEmoji";
import styles from "./Explore.module.css";
import { CardLayout } from "../../components/Card/Card";

const conicColors = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

export const Explore = () => {
  const emojis = [
    {
      title: "muito feliz",
      img: "😊",
      id: 1,
      color: "#E01754",
      percent: "20",
    },
    { title: "feliz", img: "🙂", id: 2, color: "#3D9CFB", percent: "30" },
    { title: "normal", img: "😐", id: 3, color: "#72EB70", percent: "5" },
    { title: "triste", img: "😢", id: 4, color: "#66E7CF", percent: "35" },
    {
      title: "muito triste",
      img: "😭",
      id: 5,
      color: "#924BEB",
      percent: "10",
    },
  ];

  const atividades = [
    {
      title: "Meditação",
      id: 1,
      percent: "50",
    },
    {
      title: "Técnica de respiração.",
      id: 2,
      percent: "30",
    },
    {
      title: "Relaxamento",
      id: 3,
      percent: "15",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Relatório</h1>

      <Row justify="center">
        {emojis.map((emoji) => (
          <Col key={emoji.id} xs={4.1}>
            <ButtonEmoji
              icon={emoji.img}
              background={emoji.color}
              customStyle={styles.emoji}
              isPercent
              percent={emoji.percent}
            />
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <CardLayout
          cardTitle={"Acessou o app"}
          stylesCard={styles.card1}
          children={
            <>
              <div class="row">
                <h1>2</h1>
                <span>Vezes no intervalo de 12h</span>
              </div>
            </>
          }
        />
        <CardLayout
          cardTitle={"Você realizou"}
          stylesCard={styles.card2}
          children={
            <div class="row">
              <h1>75%</h1>
              <span>Das atividades propostas.</span>
            </div>
          }
        />
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <CardLayout
          cardTitle={"Atividades mais praticadas"}
          stylesCard={styles.card3}
          children={
            <>
              {atividades.map((atividade) => (
                <div key={atividade.id} className="row">
                  <span>{atividade.title}</span>
                  <Progress
                    percent={parseInt(atividade.percent)}
                    status="active"
                    strokeColor={conicColors}
                  />
                </div>
              ))}
            </>
          }
        />
      </Row>
    </div>
  );
};
