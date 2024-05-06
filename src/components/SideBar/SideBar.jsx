import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom"; // Importar Link do React Router
import React from "react";
const { Sider } = Layout;
import styles from "./SideBar.module.css";
import logo from "../../../public/icons/logo.png";
import iconChat from "../../../public/icons/chat.svg";
import iconTree from "../../../public/icons/tree.svg";
import iconHospital from "../../../public/icons/hospital.svg";
import iconHome from "../../../public/icons/home.svg";

export const SiderBar = () => (
  <Sider
    trigger={null}
    className={styles.sideBar}
    breakpoint="lg"
    style={{
      background: "black",
      boxShadow: "2px 0 6px rgba(0, 21, 41, 0.35)",
    }}
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>

    <Menu className={styles.menu} mode="inline">
      {[
        {
          icon: <img src={iconHome} alt="Tree" className={styles.icon} />,
          label: "Home",
          link: "/home",
        },
        {
          icon: <img src={iconTree} alt="Tree" className={styles.icon} />,
          label: "Squads",
          link: "/squads",
        },
        {
          icon: <img src={iconChat} alt="Chat" className={styles.icon} />,
          label: "Chat",
          link: "/chat",
        },
        {
          icon: (
            <img src={iconHospital} alt="Hospital" className={styles.icon} />
          ),
          label: "Clínicas",
          link: "/catalogo-clinicas",
        },
      ].map((item, index) => (
        <Menu.Item
          key={String(index + 1)}
          icon={item.icon}
          className={styles.menuItem}
          style={{ color: "white" }}
          activeStyle={{ background: "#404040", color: "#404040" }} // Altera o fundo para cinza quando em foco
        >
          <Link to={item.link} className={styles.link}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
);
