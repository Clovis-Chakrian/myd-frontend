/* eslint-disable react/prop-types */
import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./Button.module.css";

const ButtonRegister = ({
  className,
  name,
  onClick,
  disabled,
  icon,
}) => {
  return (
    <AntdButton
      shape="circle"
      type="primary"
      icon={icon}
      onClick={onClick}
      className={clsx(styles.actionButton, className)}
      disabled={disabled}
    >
      {name}
    </AntdButton>
  );
};

export default ButtonRegister;
