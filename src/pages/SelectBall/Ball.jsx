import React, { useEffect, useState } from "react";
import styles from "./SelectBall.module.css";
import ButtonCircule from "../../components/ButtonCircule/ButtonCircule";
import { httpClientJwt } from "../../services/httpClient";
import { Alert } from "antd";

export const Ball = ({ setProgress }) => {
  const [selectedBalls, setSelectedBalls] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [erros, setErros] = useState([]);

  const listBall = async () => {
    try {
      const response = await httpClientJwt.get("/modalidades");

      setModalidades(response.data);
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  const handleSelect = (id) => {
    setSelectedBalls((prevSelectedBalls) => {
      const isSelected = prevSelectedBalls.includes(id);
      const newSelectedBalls = isSelected
        ? prevSelectedBalls.filter((ballId) => ballId !== id)
        : [...prevSelectedBalls, id];

      setProgress(newSelectedBalls.length === 0 ? 0 : 50);

      return newSelectedBalls;
    });
  };

  useEffect(() => {
    listBall();
  }, []);

  return (
    <div className={styles.container}>
      {erros.map((erro) => {
        return (
          <Alert
            key={erro}
            message={erro}
            type="error"
            closable
            onClose={() => setErros(erros.filter((err) => err != erro))}
          />
        );
      })}
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
  );
};
