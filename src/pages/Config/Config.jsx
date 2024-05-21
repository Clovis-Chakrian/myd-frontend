import { Card, Space } from "antd";
import ButtonPrimary from "../../components/Button/Button";
import { AppLayout } from "../../components/AppLayout/AppLayout";
import { PageHeader } from "antd";
import React from "react";

export const Config = () => {
  return (
    <AppLayout>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Space direction="vertical" size={16}></Space>
    </AppLayout>
  );
};
