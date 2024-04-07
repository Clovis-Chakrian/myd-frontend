import { Card, Space } from "antd";
import ButtonPrimary from "../../components/Button/button";

const CatalogoClinicas = () => {
  return (
    <Space direction="vertical" size={16}>
      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <ButtonPrimary name={"Saiba Mais"} />
      </Card>
    </Space>
  );
};

export default CatalogoClinicas;
