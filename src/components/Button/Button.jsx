import { Button } from "antd";
import style from "./Button.module.css";

// eslint-disable-next-line react/prop-types
const ButtonPrimary = ({ name, onClick }) => {
  return (
    <Button onClick={onClick} className={style.buttonNormal} type="primary">
      {name}
    </Button>
  );
};

export default ButtonPrimary;
