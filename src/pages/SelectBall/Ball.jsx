import React, { useEffect, useState } from "react";
import styles from "./SelectBall.module.css";
import ButtonCircule from "../../components/ButtonCircule/ButtonCircule";
import { httpClientJwt } from "../../services/httpClient";
import { Alert, Spin } from "antd";

export const Ball = ({ setProgress, setSelectedBalls }) => {
  const [selectedBalls, updateSelectedBalls] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [erros, setErros] = useState([]);

  const listBall = async () => {
    try {
      const response = await httpClientJwt.get("/modalidades");
      setModalidades(response.data);
      setIsLoading(false);
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  const handleSelect = (id) => {
    updateSelectedBalls((prevSelectedBalls) => {
      const isSelected = prevSelectedBalls.includes(id);
      let newSelectedBalls;

      if (isSelected) {
        newSelectedBalls = prevSelectedBalls.filter((ballId) => ballId !== id);
      } else {
        if (prevSelectedBalls.length < 5) {
          newSelectedBalls = [...prevSelectedBalls, id];
        } else {
          return prevSelectedBalls;
        }
      }
      setSelectedBalls(newSelectedBalls);
      setProgress(newSelectedBalls.length === 0 ? 0 : 50);
      return newSelectedBalls;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    listBall();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.container}>
        {erros.map((erro) => (
          <Alert
            key={erro}
            message={erro}
            type="error"
            closable
            onClose={() => setErros(erros.filter((err) => err !== erro))}
          />
        ))}
        <div className={styles.ballContainer}>
          {modalidades.map((ball) => (
            <ButtonCircule
              key={ball.modalidadeId}
              name={ball.nome}
              onClick={() => handleSelect(ball.modalidadeId)}
              isSelected={selectedBalls.includes(ball.modalidadeId)}
            />
          ))}
        </div>
      </div>
    </Spin>
  );
};
