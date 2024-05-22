import React from "react";
import { ConfigCards } from "./ConfigCards";
import { ContentLayout } from "../../components/ContentLayout/ContentLayout";

export const Config = () => {
  return <ContentLayout children={<ConfigCards />}></ContentLayout>;
};
