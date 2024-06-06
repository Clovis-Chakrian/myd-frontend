import styles from "./CardDetalhesTrilhas.module.css";
import { Card } from "antd";

export const CardDetalhesTrilhas = ({ text, imageUrl}) => {
  return (
      <Card className={styles.card}>
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
