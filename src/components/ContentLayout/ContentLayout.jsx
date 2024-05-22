import { Content } from "antd/es/layout/layout";
import styles from "./ContentLayout.module.css";

// eslint-disable-next-line react/prop-types
export const ContentLayout = ({ children }) => {
  return (
    <Content className={styles.content}>
      <div className={styles.children}>{children}</div>
    </Content>
  );
};
