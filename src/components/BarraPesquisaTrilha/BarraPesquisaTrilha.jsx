import { SearchOutlined, ControlOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styles from "./BarraPesquisaTrilha.module.css";

const handleSearchIconClick = () => {
  console.log("Search icon clicked");
};

const handleControlIconClick = () => {
  console.log("Control icon clicked");
};


export const BarraPesquisaTrilha = () =>{
    return(
        <div
        className={styles.barraPesquisa}
      >
        <Space direction="vertical" size="large" style={{ width: 800 }}>
          <Space.Compact size="large">
            <Input
              style={{
                backgroundColor: "#FFFF",
                borderRadius: 80,
                border: "1px solid #d9d9d9",
                width: 800,
                gap: 20,
                padding: 13,
                fontSize: 24,
              }}
              prefix={
                <span onClick={handleSearchIconClick}>
                  <SearchOutlined
                    style={{
                      fontSize: 25,
                      color: "#3A3B42",
                      cursor: "pointer",
                    }}
                  />
                </span>
              }
              placeholder="Pesquise por uma trilha!"
              suffix={
                <span onClick={handleControlIconClick}>
                  <ControlOutlined
                    style={{
                      fontSize: 25,
                      color: "#3A3B42",
                      cursor: "pointer",
                    }}
                  />
                </span>
              }
            />
          </Space.Compact>
        </Space>
      </div>
    )
}