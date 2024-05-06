import React from "react";
import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({ className, name, onClick }) => {
  return (
    <AntdButton
      type="primary"
      onClick={onClick}
      className={clsx(styles.actionButton, className)}
    >
      {name}
    </AntdButton>
  );
};

export default Button;
