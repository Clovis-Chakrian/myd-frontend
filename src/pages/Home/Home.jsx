import { AppLayout } from "../../components/AppLayout/AppLayout";
import React from 'react';
import humor from '../../../public/icons/humor.png'
import { Card, Row, Col, Carousel, Checkbox, Flex } from 'antd';
import Button from '../../components/Button/Button.jsx'
import style from './Home.module.css'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const Home = () => {
  return (
    <AppLayout>
      <h1>Pronta para avaliar seu dia?</h1>
      <img src={humor} alt="regua de humor" className={style.imgHumor}/>

      <Row className={style.rowOne}>
        <Col sm={24}>
          <Card className={style.Cards}>
            <h1>23:59</h1>
          </Card>
        </Col>
      </Row>

      <Row className={style.row}>
        <Col sm={11}>
          <Card title="Desafios do dias" className={style.Cards}>
            <p><Checkbox /> Beber 2L Água</p>
            <p><Checkbox /> Correr 500m</p>
            <p><Checkbox /> Comer salada</p>
            <Button name={"Veja tudo"} className={style.Button} />
          </Card>
        </Col>
        <Col sm={1}>
        </Col>
        <Col sm={12}>
          <Card title="Espaço zen" className={style.Cards}>
            <p>Quanto tempo você precisa relaxar?</p>
            <h1>--h --min</h1>
            <Button name={"Vamos começar"} className={style.Button} />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={24}>
          <Carousel autoplay className={style.carrosel}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>

    </AppLayout>
  );
};
