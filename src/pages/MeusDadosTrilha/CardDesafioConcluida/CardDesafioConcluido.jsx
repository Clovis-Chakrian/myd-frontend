/* eslint-disable react/prop-types */
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from './CardDesafioConcluido.module.css';

export const CardDesafioConcluido = ({ descricao }) => {
  return (
    <div className={styles.card}>
        <div className={styles.icon}>
          <CheckCircleOutlined style={{ fontSize: '65px', color: '#AFDD82' }}/>
        </div>
        <p>{descricao}</p>
    </div>
  )
}