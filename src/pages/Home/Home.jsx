import React, { useState, useEffect } from "react";
import { Row, Col, Checkbox, Carousel } from "antd";
import Button from "../../components/Button/Button.jsx";
import style from "./Home.module.css";
import { ContentLayout } from "../../components/ContentLayout/ContentLayout";
import { CardLayout } from "../../components/Card/Card.jsx";
import { ButtonEmoji } from "../../components/ButtonEmoji/ButtonEmoji.jsx";
import mariaImg from "../../../public/events/maria.jpg";
import rockImg from "../../../public/events/rock.png";
import taruImg from "../../../public/events/taru.jpg";

export const Home = () => {
  
  const [desafios, setDesafios] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const emojis = [
    { title: "muito feliz", img: "😊", id: 1, color: "#E01754" },
    { title: "feliz", img: "🙂", id: 2, color: "#3D9CFB" },
    { title: "normal", img: "😐", id: 3, color: "#72EB70" },
    { title: "triste", img: "😢", id: 4, color: "#66E7CF" },
    { title: "muito triste", img: "😭", id: 5, color: "#924BEB" },
  ];

  const events = [
    { alt: "showMaria", img: mariaImg, id: 1 },
    { alt: "rockImg", img: rockImg, id: 2 },
    { alt: "taruImg", img: taruImg, id: 3 },
  ];

  const listDesafio = async () => {
    setIsLoading(true);
    try {
      const response = await httpClientJwt.get("/desafios");
      setDesafios(response.data);
    } catch (err) {
      setErros([...err.response.data.erros]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    listDesafio();
  }, []);

console.log(desafios)
  return (
    <ContentLayout>
      <div className={style.configContainer}>
        <Row className={style.rowOne} justify="center" gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <CardLayout cardTitle={"Pronta para avaliar seu dia?"} className={style.card}>
              <Row style={{ fontWeight: "bold" }}>Olá Ana! 🥰</Row>
              <Row>Como você está se sentindo hoje?</Row>
              <Row justify="center">
                {emojis.map((emoji) => (
                  <Col key={emoji.id} xs={4}>
                    <ButtonEmoji icon={emoji.img} background={emoji.color} />
                  </Col>
                ))}
              </Row>
            </CardLayout>
          </Col>
          <Col xs={24} md={12}>
            <CardLayout cardTitle={"Cronometro"} className={style.card}>
              <Row style={{ fontWeight: "bold" }} justify="center">23:59</Row>
            </CardLayout>
          </Col>
        </Row>

        <Row className={style.rowOne} justify="center" gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <CardLayout cardTitle={"Desafios do dia"} className={style.card}>
                {erros.length > 0 && (
                  <Alert message={erros.join(", ")} type="error" />
                )}
                {desafios.map((des) => (
                  <p key={des.desafioId}>
                    <Checkbox /> {des.titulo}
                  </p>
                ))}
              <Button name={"Veja tudo"} className={style.Button} />
            </CardLayout>
          </Col>
          <Col xs={24} md={12}>
            <CardLayout cardTitle={"Espaço zen"} className={style.card}>
              <p>Quanto tempo você precisa relaxar?</p>
              <h1>--h --min</h1>
              <Button name={"Vamos começar"} className={style.Button} />
            </CardLayout>
          </Col>
        </Row>

        <Row className={style.rowOne} justify="center">
          <Col xs={24}>
            <CardLayout cardTitle={"Eventos"} className={style.cardCarousel}>
              <Carousel autoplay>
                {events.map((event) => (
                  <div key={event.id}>
                    <img
                      src={event.img}
                      alt={event.alt}
                      className={style.eventImage}
                    />
                  </div>
                ))}
              </Carousel>
            </CardLayout>
          </Col>
        </Row>
      </div>
    </ContentLayout>
  );
};




