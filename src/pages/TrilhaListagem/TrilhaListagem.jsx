import { BarraPesquisaTrilha } from "../../components/BarraPesquisaTrilha/BarraPesquisaTrilha";
import { TabsTrilha } from "../../components/TabsTrilha/TabsTrilha";
import styles from "./TrilhaListagem.module.css";
import { useState, useEffect } from "react";
import { CardListagemTrilhas } from "../../components/CardListagemTrilhas/CardListagemTrilhas";
import { httpClientJwt } from "../../services/httpClient";
import { Spin } from "antd";

export const TrilhaListagem = () => {
  const [trilha, setTrilha] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrilhas = async () => {
    try {
      const response = await httpClientJwt.get("/trilhas");
      setTrilha(response.data);
      setIsLoading(false);
    } catch (err) {
      setErros([...err.response.data.erros]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrilhas();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.center}>
        <TabsTrilha />
        <hr className={styles.line} />
        <BarraPesquisaTrilha />
        <div className={styles.list}>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            trilha.map((trilha, index) => (
              <CardListagemTrilhas
                key={index}
                index={index}
                text={trilha.nome}
                imageUrl={trilha.imageUrl}
                trilhaId={trilha.trilhaId}
              />
            ))
          )}
          {erros.length > 0 && (
            <p>Erro ao carregar trilhas: {erros.join(", ")}</p>
          )}
        </div>
      </div>
    </Spin>
  );
};
