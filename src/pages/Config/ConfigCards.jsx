import { Col, Row, Progress } from "antd";
import React from "react";
import { ConfigAvatar } from "./ConfigAvatar";
import { CardLayout } from "../../components/Card/Card";
import styles from "./Config.module.css";
import { ButtonEmoji } from "../../components/ButtonEmoji/ButtonEmoji";

const conicColors = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

export const ConfigCards = () => {
  const performance = [
    { title: "Meditação", progress: 75, id: 1 },
    { title: "Técnica de respiração.", progress: 26, id: 2 },
    { title: "Relaxamento", progress: 5, id: 3 },
  ];

  const emojis = [
    { title: "muito feliz", img: "😊", id: 1, color: "#E01754" },
    { title: "feliz", img: "🙂", id: 2, color: "#3D9CFB" },
    { title: "normal", img: "😐", id: 3, color: "#72EB70" },
    { title: "triste", img: "😢", id: 4, color: "#66E7CF" },
    { title: "muito triste", img: "😭", id: 5, color: "#924BEB" },
  ];

  return (
    <React.Fragment>
      <div className={styles.configContainer}>
        <div className={styles.avatarDiv}>
          <ConfigAvatar />
        </div>

        <Row>
          <Col sm={8}>
            <CardLayout cardTitle={"Desempenho"}>
              {performance.map((item) => (
                <div key={item.id} style={{ marginBottom: 16 }}>
                  <h4>{item.title}</h4>
                  <Progress
                    percent={item.progress}
                    showInfo={true}
                    strokeColor={conicColors}
                  />
                </div>
              ))}
            </CardLayout>
          </Col>
          <Col sm={8}>
            <CardLayout cardTitle={"Diário de humor"}>
              <Row style={{ fontWeight: "bold" }}>Olá Ana! 🥰</Row>
              <Row>Como você está se sentindo hoje?</Row>
              <Row>
                {emojis.map((emoji) => (
                  <Col key={emoji.id}>
                    <ButtonEmoji icon={emoji.img} background={emoji.color} />
                  </Col>
                ))}
              </Row>
            </CardLayout>
          </Col>
          <Col sm={8}>
            <CardLayout cardTitle={"Ofensiva"}></CardLayout>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
