/* eslint-disable react/prop-types */
import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ className, name, onClick, disabled }) => {
  return (
    <AntdButton
      type="primary"
      onClick={onClick}
      className={clsx(styles.actionButton, className)}
      disabled={disabled}
    >
      {name}
    </AntdButton>
  );
};

export default Button;
