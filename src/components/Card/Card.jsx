/* eslint-disable react/prop-types */
import { Card } from 'antd';
import styles from './Card.module.css';

export const CardImg = ({cardTitle,CardImg,Content}) => (
  <Card className={styles.Card}
    title={cardTitle}
    bordered={false}
    style={{
      width: 300,
    }}
    cover={<img style={{
        width:'90%',
        padding:'20px',


    }} alt="example" src={CardImg} />}
  >
    {Content}

  </Card>
);
