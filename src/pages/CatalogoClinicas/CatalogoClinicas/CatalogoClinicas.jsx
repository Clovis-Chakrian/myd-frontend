import { Card, Space } from "antd";
import ButtonPrimary from "../../../components/Button/Button";
import { AppLayout } from "../../../components/AppLayout/AppLayout";

export const CatalogoClinicas = () => {
  return (
    <AppLayout>
      <Space direction="vertical" size={16}>
        <Card title="Default size card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <ButtonPrimary name={"Saiba Mais"} />
        </Card>
      </Space>
    </AppLayout>
  );
};