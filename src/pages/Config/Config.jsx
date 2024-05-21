import { AppLayout } from "../../components/AppLayout/AppLayout";
import React from "react";
import { ConfigCards } from "./ConfigCards";

export const Config = () => {
  return <AppLayout children={<ConfigCards />}></AppLayout>;
};
