import { Tabs, ConfigProvider } from "antd";
import { Link, useLocation } from "react-router-dom";
import style from "./TabsTrilha.module.css";
const { TabPane } = Tabs;

export const TabsTrilha = () => {
  const items = [
    {
      key: "1",
      label: "Tab 1",
      path: "/listagem-trilhas",
      children: (
        <Link to="/listagem-trilhas">
          <span className={style.tabsText}>
            <p>Todas as Trilhas</p>
          </span>
        </Link>
      ),
    },
    {
      key: "2",
      label: "Tab 2",
      path: "/minhas-trilhas",
      children: (
        <Link to="/minhas-trilhas">
          <span className={style.tabsText}>
            <p>Minhas Trilhas</p>
          </span>
        </Link>
      ),
    },
  ];
  const location = useLocation();
  const activeKey =
    items.find((item) => location.pathname.startsWith(item.path))?.key || "1";

  return (
    <div className={style.tabs}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#F2B66D",
              itemActiveColor: "rgba(255, 179, 104, 0.25)",
            },
          },
        }}
      >
        <Tabs activeKey={activeKey} onChange={(key) => console.log(key)}>
          <TabPane tab={items[0].children} key={items[0].key}></TabPane>
          <TabPane tab={items[1].children} key={items[1].key}></TabPane>
        </Tabs>
      </ConfigProvider>
    </div>
  );
};
