import { Button as AntdButton } from "antd";
import styles from "./ButtonEmoji.module.css";
import { useState } from "react";
import { PaperClipOutlined } from '@ant-design/icons'; 

export const ButtonEmoji = ({ icon, background }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <AntdButton
        type="primary"
        icon={icon}
        onClick={handleClick}
        className={styles.buttonEmoji}
        style={{ background, fontSize: "30px", marginTop: "20px" }}
      />
      {selected && <PaperClipOutlined className={styles.attachmentIcon} />}
    </>
  );
};
