import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { SiderBar } from "../SideBar/SideBar";
import { HeaderLayout } from "../HeaderLayout/HeaderLayout";

// eslint-disable-next-line react/prop-types
export const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderBar />
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderLayout />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: "calc(100vh - 112px)" }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>MYD - Make Your Day</Footer>
      </Layout>
    </Layout>
  );
};
