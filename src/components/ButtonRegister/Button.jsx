import React from "react";
import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./Button.module.css";

const ButtonRegister = ({
  className,
  name,
  onClick,
  disabledClassName,
  icon,
}) => {
  return (
    <AntdButton
      shape="circle"
      type="primary"
      icon={icon}
      onClick={onClick}
      className={clsx(styles.actionButton, className)}
      disabled={disabledClassName}
    >
      {name}
    </AntdButton>
  );
};

export default ButtonRegister;
