import logo from "../../../public/icons/logo.png";
import React, { useState } from "react";
import { SolidProgress } from "../../components/SolidProgress/SolidProgress";
import styles from "./SelectBall.module.css";
import { Ball } from "./Ball";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const SelectBall = () => {
  const [progress, setProgress] = useState(0);

  return (
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
      <Ball setProgress={setProgress} />
      <div className={styles.buttonDiv}>
        <Link to="/trilhas">
          <Button
            name={"Seguir"}
            className={styles.button}
            disabledClassName={progress === 0}
          />
        </Link>
      </div>
    </React.Fragment>
  );
};
