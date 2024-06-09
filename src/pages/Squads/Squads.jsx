/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, Row, Col, Checkbox, Spin, Alert } from "antd";
import style from "./Squads.module.css";
import trilhaRelaxamento from "../../../public/icons/trilhaRelaxamento.svg";
import userImg from "../../../public/icons/userImg.svg";
import badge1 from "../../../public/icons/badges/badge1.svg";
import badge2 from "../../../public/icons/badges/badge2.svg";
import { ContentLayout } from "../../components/ContentLayout/ContentLayout";
import { httpClientJwt } from "../../services/httpClient";
import { CardLayout } from "../../components/Card/Card.jsx";

const badges = [
  { image: badge1, description: "100 desafios concluídos" },
  { image: badge2, description: "Participação em 4 eventos" },
];

const SquadMemberCard = ({ name, image }) => (
  <Card className={style.squadMemberCard}>
    <img src={image} alt={name} className={style.memberImage} />
    <h3>{name}</h3>
  </Card>
);
  
export const Squads = () => {
  const [missions, setMissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const squadMembers = [
    { name: "Ana", image: userImg },
    { name: "João", image: userImg },
    { name: "Davi", image: userImg },
    { name: "Sofia", image: userImg },
  ];

  useEffect(() => {
    const fetchMissions = async () => {
      setIsLoading(true);
      try {
        const response = await httpClientJwt.get("/missoes");
        setMissions(response.data);
        setIsLoading(false);
      } catch (err) {
        setErrors([err.message]);
        setIsLoading(false);
      }
    };
    fetchMissions();
  }, []);

  return (
    <ContentLayout>
              <Spin spinning={isLoading}>

      <div className={style.container}>
      <Row >

        <CardLayout cardTitle={"Missões do Squad"} stylesCard={style.card1}>
            <img
              src={trilhaRelaxamento}
              alt="trilhaRelaxamento"
              className={style.imgTrilha}
            />
              <Row justify="center">
              {errors.length > 0 && (
                <Alert
                  message="Erro ao carregar missões"
                  description={errors.join(", ")}
                  type="error"
                  closable
                  onClose={() => setErrors([])}
                />
              )}
              {missions.map((mission) => (
                <p key={mission.missaoId}>
                  <Checkbox>{mission.nome}</Checkbox>
                </p>
              ))}
              </Row>
            </CardLayout>

            <CardLayout cardTitle={"Meu Squad"} stylesCard={style.card2}>
            <Row gutter={[16, 16]}>
              {squadMembers.map((member, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <SquadMemberCard name={member.name} image={member.image} />
                </Col>
              ))}
            </Row>
              <Row justify="center">
              {errors.length > 0 && (
                <Alert
                  message="Erro ao carregar missões"
                  description={errors.join(", ")}
                  type="error"
                  closable
                  onClose={() => setErrors([])}
                />
              )}
              </Row>
              <br />
                <h4>Conquistas: </h4>

                <Row gutter={[16, 16]} justify="center">
                  {badges.map((badge, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                      <div className={style.badgeContainer}>
                        <img
                          src={badge.image}
                          alt={`Badge ${index + 1}`}
                          className={style.badgeImage}
                        />
                        <p className={style.badgeDescription}>
                          {badge.description}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
            </CardLayout>
      </Row>
      </div>
      </Spin>

    </ContentLayout>
  );
};

