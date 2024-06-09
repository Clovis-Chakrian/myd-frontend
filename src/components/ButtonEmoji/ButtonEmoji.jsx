import { Button as AntdButton } from "antd";
import styles from "./ButtonEmoji.module.css";
import { useState } from "react";
import { PaperClipOutlined } from "@ant-design/icons";

export const ButtonEmoji = ({
  icon,
  background,
  selectedEmoji,
  customStyle,
  isPercent,
  percent,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      {isPercent ? (
        <AntdButton
          type="primary"
          onClick={handleClick}
          className={`${styles.buttonEmoji} ${customStyle}`}
          style={{ background, fontSize: "30px", marginTop: "20px" }}
        >
          <span className={styles.iconWithPercent}>
            {icon} <br />
            {isPercent && <span className={styles.percent}>{percent}%</span>}
          </span>
        </AntdButton>
      ) : (
        <AntdButton
          type="primary"
          icon={icon}
          onClick={handleClick}
          className={styles.buttonEmoji}
          style={{ background, fontSize: "30px", marginTop: "20px" }}
        />
      )}
      {selectedEmoji && selected && (
        <PaperClipOutlined className={styles.attachmentIcon} />
      )}
    </>
  );
};
