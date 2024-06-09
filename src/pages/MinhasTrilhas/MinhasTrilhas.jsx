import { TabsTrilha } from "../../components/TabsTrilha/TabsTrilha";
import { CardMinhasTrilhas } from "../../components/CardMinhasTrilhas/CardMinhasTrilhas";
import styles from "./MinhasTrilhas.module.css";
import { Spin } from "antd";
import { ContadorTrilhas } from '../../components/ContadorTrilhas/ContadorTrilhas';
import { useState, useEffect } from "react";
import { httpClientJwt } from "../../services/httpClient";

export const MinhasTrilhas = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrilhas = async () => {
    setIsLoading(true);
    try {
      const response = await httpClientJwt.get("/trilhas");
      setTrilhas(response.data);
    } catch (err) {
      const errorMessages = err.response?.data?.erros || ["Erro desconhecido"];
      setErros(errorMessages);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTrilhas();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.center}>
        <TabsTrilha />
        <hr className={styles.line} />
        <div className={styles.list}>
          <ContadorTrilhas contador={3} total={5} />
          {isLoading ? (
            <p className={styles.loading}>Carregando...</p>
          ) : (
            trilhas.map((trilha, index) => (
              <CardMinhasTrilhas
                key={index}
                index={index}
                text={trilha.nome}
                imageUrl={trilha.imageUrl}
                trilhaId={trilha.trilhaId}
              />
            ))
          )}
          {erros.length > 0 && (
            <p className={styles.erros}>Erro ao carregar trilhas: {erros.join(", ")}</p>
          )}
        </div>
      </div>
    </Spin>
  );
};
