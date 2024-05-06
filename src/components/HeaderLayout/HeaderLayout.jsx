import { Header } from "antd/es/layout/layout";
import styles from "./HeaderLayout.module.css"

export const HeaderLayout = () => {
    return (
        <Header
        className={styles.header}
        style={{
          padding: 0,
        }}
      />
    )
};
