import React from "react";
import Button from "../../components/Button/Button";
import logo from "../../../public/icons/logo.png";
import styles from "./InitialPage.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const InitialPage = () => {
  return (
    <React.Fragment>
      <div className={styles.InitialPage}>
        <Row>
          <Col span={24}>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
        <Row className={styles.subTitle}>
          Vamos juntos em busca de uma jornada <br />
          diária cheia de descobertas e<br />
          conquistas!
        </Row>
        <Row
          style={{
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          <Link to="/home">
            <Button name={"Entrar"} className={styles.button}></Button>
          </Link>
        </Row>
        <Row>
          <Link to="/cadastro">
            <Button name={"Cadastrar"} className={styles.button}></Button>
          </Link>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default InitialPage;
