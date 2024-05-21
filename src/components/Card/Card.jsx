/* eslint-disable react/prop-types */
import { Card } from "antd";
import styles from "./Card.module.css";

export const CardLayout = ({ cardTitle, CardImg, children, stylesCard }) => (
  <Card
    className={stylesCard ? stylesCard : styles.card}
    title={cardTitle}
    bordered={false}
  >
    {CardImg && (
      <img
        style={{
          width: "90%",
          padding: "20px",
        }}
        alt="example"
        src={CardImg}
      />
    )}
    {children}
  </Card>
);
