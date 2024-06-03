import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import styles from "./Config.module.css";

export const ConfigAvatar = () => {
  return <Avatar size={64} icon={<UserOutlined />} className={styles.avatar} />;
};
