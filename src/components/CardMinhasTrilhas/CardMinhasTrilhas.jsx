import styles from "./CardMinhasTrilhas.module.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { ResumoDesafiosTrilhas } from "../ResumoDesafiosTrilhas/ResumoDesafiosTrilhas";

export const CardMinhasTrilhas = ({ text, imageUrl, trilhaId }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${trilhaId}`);
  return (
    <Card className={styles.card} onClick={handleClick}>
      <div className={styles.divCard}>
        <div>
          <h3 className={styles.h3Card}>{text}</h3>
        </div>
        <div>
          <img className={styles.imgCard} src={imageUrl} alt="Imagem" />
        </div>
        <div className={styles.details}>
          <ResumoDesafiosTrilhas desafiosConcluidos={"3"} totalDesafios={"5"} />
        </div>
      </div>
    </Card>
  );
};
