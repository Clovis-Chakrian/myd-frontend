/* eslint-disable react/prop-types */
import { AppLayout } from "../../components/AppLayout/AppLayout.jsx";
import { Card, Row, Col, Checkbox } from "antd";
import Button from "../../components/Button/Button.jsx";
import style from "./DetalheSquad.module.css";
import trilhaRelaxamento from "../../../public/icons/trilhaRelaxamento.svg";
import userImg from "../../../public/icons/userImg.svg";
import badge1 from "../../../public/icons/badges/badge1.svg";
import badge2 from "../../../public/icons/badges/badge2.svg";

const badges = [
  { image: badge1, description: "100 desafios concluídos" },
  { image: badge2, description: "Participação em 4 eventos" }
];

const SquadMemberCard = ({ name, image }) => (
  <Card className={style.squadMemberCard}>
    <img src={image} alt={name} className={style.memberImage} />
    <h3>{name}</h3>
  </Card>
);

export const DetalheSquad  = () => {

  const squadMembers = [
    { name: "Ana", image: userImg },
    { name: "Cláudio", image: userImg },
    { name: "Junior", image: userImg },
    { name: "Sofia", image: userImg }
  ];

  return (
    <AppLayout>
      <Row className={style.row}>
        <Col sm={11}>
          <Card title="Desafios do Squad" className={style.Cards}>
            <img src={trilhaRelaxamento} alt="trilhaRelaxamento" className={style.imgTrilha} />
            <p>
              <Checkbox /> Respire fundo por 10min
            </p>
            <p>
              <Checkbox /> Alongue por 10min
            </p>
            <p>
              <Checkbox /> Fique 45min sem redes sociais
            </p>
            <Button name={"Veja tudo"} className={style.Button} />
          </Card> 
        </Col>



        <Col sm={1}></Col>
        <Col sm={12}>
          <Card title="Meu Squad" className={style.Cards}>
            <Row gutter={[16, 16]}>
              {squadMembers.map((member, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <SquadMemberCard name={member.name} image={member.image} />
                </Col>
              ))}
            </Row>

            <Row justify="center">
              <Col>
              <br />
                <h4>Conquistas: </h4>

                <Row gutter={[16, 16]} justify="center">
                  {badges.map((badge, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                      <div className={style.badgeContainer}>
                        <img src={badge.image} alt={`Badge ${index + 1}`} className={style.badgeImage} />
                        <p className={style.badgeDescription}>{badge.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>

              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
};

