/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { httpClient } from "./services/httpClient"
import { Spin } from "antd"

export const App = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)


  const handleAcordarServidor = async () => {
    await httpClient.get("/home");

    setTimeout(() => {
      handleAcordarServidor();
    }, (60000 * 10))

    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true);
    handleAcordarServidor();
  }, []);

  return (
    <Spin spinning={isLoading}>
      {children}
    </Spin>
  )
}