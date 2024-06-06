import styles from "./CardListagemTrilhas.module.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export const CardListagemTrilhas = ({ text, imageUrl ,trilhaId}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${trilhaId}`);
  return (
      <Card className={styles.card}
       onClick={handleClick}>
        <div className={styles.divCard}>
          <div>
            <h3 className={styles.h3Card}>{text}</h3>
          </div>
          <div style={{ maxWidth: 200, maxHeight: 100 }}>
            <img className={styles.imgCard} src={imageUrl} alt="Imagem" />
          </div>
        </div>
        
      </Card>
  );
};
