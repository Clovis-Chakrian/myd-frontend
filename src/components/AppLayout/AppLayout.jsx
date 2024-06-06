import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { SiderBar } from "../SideBar/SideBar";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import styles from "./AppLayout.module.css";

const { Content, Footer } = Layout;

// eslint-disable-next-line react/prop-types
export const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBar />
      <Layout className={styles.siteLayout}>
        <Content
          className={styles.content}
          style={{ margin: "25px 0px 0px", overflow: "initial", width: "100%" }}
        >
          <ContentLayout>
            <Outlet />
          </ContentLayout>
        </Content>
        <Footer style={{ textAlign: "center" }}>MYD - Make Your Day</Footer>
      </Layout>
    </Layout>
  );
};
