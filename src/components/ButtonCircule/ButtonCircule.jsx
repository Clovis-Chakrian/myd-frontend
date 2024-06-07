import React from "react";
import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./ButtonCircule.module.css";

const ButtonCircule = ({
  className,
  name,
  onClick,
  disabled,
  icon,
  isSelected,
}) => {
  return (
    <AntdButton
      shape="circle"
      type="primary"
      icon={icon}
      onClick={onClick}
      className={clsx(styles.actionButton, className, {
        [styles.selected]: isSelected,
      })}
      disabled={disabled}
    >
      {name}
    </AntdButton>
  );
};

export default ButtonCircule;
