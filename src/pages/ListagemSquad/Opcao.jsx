import style from "./ListagemSquad.module.css";
import { Card, Col, Flex } from "antd";

export const Opcao = ({ mascote }) => {
  return (
    <Col sm={24} className={style.col}>
      <Card className={style.cards}>
        <Flex gap="middle" >
          <img src={mascote.img} alt={`mascote-${mascote.nome}`} />
          <h3>{mascote.nome}</h3>
        </Flex>
        
      </Card>
    </Col>
  );
};
