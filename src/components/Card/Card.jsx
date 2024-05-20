/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import Checkbox from 'antd/es/checkbox/Checkbox';
import style from './Card.module.css';

const Card = ({ title, imageSrc, tasks, buttonText }) => {
  return (
    <div className={style.card}>
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} className={style.imgTrilha} />
      {tasks.map((task, index) => (
        <p key={index}>
          <Checkbox /> {task}
        </p>
      ))}
      <Button name={buttonText} className={style.button} />
    </div>
  );
}

export default Card;
