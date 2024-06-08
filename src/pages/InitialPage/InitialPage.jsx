import Button from "../../components/Button/Button";
import logo from "../../../public/icons/logoinitial.png";
import styles from "./InitialPage.module.css";
import { Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const InitialPage = () => {
  const navigate = useNavigate();

  const handleIsAutenticado = () => {
    const token = localStorage.getItem("jwt_token");

    if (token) navigate("/home");
  }

  useEffect(() => {
    handleIsAutenticado();
  }, []);

  return (
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
        <Link to="/login">
          <Button name={"Entrar"} className={styles.button}></Button>
        </Link>
      </Row>
      <Row>
        <Link to="/cadastro">
          <Button name={"Cadastrar"} className={styles.button}></Button>
        </Link>
      </Row>
    </div>
  );
};