import logo from "../../../public/icons/logoinitial.png";
import React, { useState } from "react";
import { SolidProgress } from "../../components/SolidProgress/SolidProgress";
import styles from "./SelectBall.module.css";
import { Ball } from "./Ball";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { httpClientJwt } from "../../services/httpClient";
import { Alert, Spin } from "antd";

export const SelectBall = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [selectedBalls, setSelectedBalls] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await httpClientJwt.post(
        "/usuarios/favoritar-modalidades",
        {
          modalidades: selectedBalls,
        }
      );
      if (response.data.sucesso) {
        setIsLoading(false);
        navigate("/trilhas");
      } else {
        setErros(response.data.erros);
      }
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  return (
    <Spin spinning={isLoading}>
      <React.Fragment>
        <header>
          <img
            src={logo}
            alt="logo"
            width={"100px"}
            style={{
              padding: "20px",
            }}
          />
        </header>
        <div className={styles.selectBall}>
          <h1>Selecione com o que você se identifica:</h1>
          <SolidProgress name="1/2" progress={progress} />
        </div>
        {erros.map((erro) => (
          <Alert
            key={erro}
            message={erro}
            type="error"
            closable
            onClose={() => setErros(erros.filter((err) => err !== erro))}
          />
        ))}
        <Ball setProgress={setProgress} setSelectedBalls={setSelectedBalls} />
        <div className={styles.buttonDiv}>
          <Button
            name={"Seguir"}
            className={styles.button}
            disabled={progress === 0}
            onClick={handleSubmit}
          />
        </div>
      </React.Fragment>
    </Spin>
  );
};
