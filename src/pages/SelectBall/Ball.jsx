import React, { useState } from "react";
import styles from "./SelectBall.module.css";
import ButtonCircule from "../../components/ButtonCircule/ButtonCircule";

export const Ball = ({ setProgress }) => {
  const [selectedBalls, setSelectedBalls] = useState([]);

  const balls = [
    { label: "Culinária", id: 1 },
    { label: "Arte", id: 2 },
    { label: "Natureza", id: 3 },
    { label: "Esportes", id: 4 },
    { label: "Praia", id: 5 },
    { label: "Livros", id: 6 },
    { label: "Palestras", id: 7 },
    { label: "Shows", id: 8 },
    { label: "Filmes e séries", id: 9 },
    { label: "TDAH", id: 10 },
    { label: "Terapia", id: 11 },
    { label: "Música", id: 12 },
    { label: "Traumas", id: 13 },
    { label: "Tristeza", id: 14 },
    { label: "Ansiedade", id: 15 },
    { label: "Depressão", id: 16 },
    { label: "Viajar", id: 17 },
    { label: "Cinema", id: 18 },
  ];

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

  return (
    <div className={styles.container}>
      <div className={styles.ballContainer}>
        {balls.map((ball, index) => (
          <ButtonCircule
            key={ball.id}
            name={ball.label}
            onClick={() => handleSelect(ball.id)}
            isSelected={selectedBalls.includes(ball.id)}
          />
        ))}
      </div>
    </div>
  );
};
