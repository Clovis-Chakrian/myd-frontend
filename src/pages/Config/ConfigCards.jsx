import { Col, Row, Progress, Checkbox } from "antd";
import React, { useState } from "react";
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
  const [offensiveDays, setOffensiveDays] = useState(3);

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

  const ofensiva = [
    { title: "Seg", id: 1, ofensiva: true },
    { title: "Ter", id: 2, ofensiva: true },
    { title: "Quart", id: 3, ofensiva: true },
    { title: "Quin", id: 4, ofensiva: false },
    { title: "Sex", id: 5, ofensiva: false },
    { title: "Sab", id: 6, ofensiva: false },
    { title: "Dom", id: 7, ofensiva: false },
  ];

  const handleCheckboxChange = (id, value) => {
    const updatedOffensiva = ofensiva.map((day) => {
      if (day.id === id) {
        return { ...day, ofensiva: value };
      }
      return day;
    });

    setOffensiva(updatedOffensiva);

    const updatedOffensiveDays = updatedOffensiva.filter(
      (day) => day.ofensiva
    ).length;
    setOffensiveDays(updatedOffensiveDays);
  };

  return (
    <div className={styles.configContainer}>
      <div className={styles.avatarDiv}>
        <ConfigAvatar />
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <CardLayout cardTitle={"Desempenho"} className={styles.card}>
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
        <Col xs={24} md={12} lg={8}>
          <CardLayout cardTitle={"Diário de humor"} className={styles.card}>
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
        <Col xs={24} md={12} lg={8}>
          <CardLayout cardTitle={"Ofensiva"} className={styles.card}>
            {ofensiva.map((day) => (
              <Row key={day.id}>
                <Checkbox
                  checked={day.ofensiva}
                  onChange={(e) =>
                    handleCheckboxChange(day.id, e.target.checked)
                  }
                >
                  {day.title}
                </Checkbox>
              </Row>
            ))}
            <Row
              style={{ fontWeight: "bold", marginTop: "10px" }}
            >{`Parabéns! Sua ofensiva é de ${offensiveDays} / 7`}</Row>
          </CardLayout>
        </Col>
      </Row>
    </div>
  );
};
