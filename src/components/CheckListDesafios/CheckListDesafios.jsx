import styles from './CheckListDesafios.module.css';
import { useState, useEffect } from 'react';
import { Checkbox, ConfigProvider } from 'antd';
import { httpClientJwt } from '../../services/httpClient';
import { useParams } from "react-router-dom";

export const CheckListDesafios = ({ dificuldade }) => {
  const { trilhaId } = useParams();
  const [desafios, setDesafios] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrilhas = async () => {
    try {
      const response = await httpClientJwt.get(`/trilhas/${trilhaId}/desafios`, {
        params: { dificuldade }
      });
      setDesafios(response.data);
      setIsLoading(false);
    } catch (err) {
      setErros([...err.response.data.erros]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrilhas();
  }, [trilhaId, dificuldade]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (erros.length > 0) {
    return <div>Erro ao carregar os desafios: {erros.join(", ")}</div>;
  }

  return (
    <div className={styles.container}>
      <ConfigProvider
        theme={{
          token: {
            colorBorder: '#f2b66d',
            colorPrimary: '#f2b66d',
            colorPrimaryHover: 'rgba(242, 182, 109, 0.5)',
          },
        }}
      >
        {desafios.map(desafio => (
          <div key={desafio.desafioId} className={styles.bloco}>
            <Checkbox className={styles.check}>
              {desafio.titulo}
            </Checkbox>
          </div>
        ))}
      </ConfigProvider>
    </div>
  );
};
