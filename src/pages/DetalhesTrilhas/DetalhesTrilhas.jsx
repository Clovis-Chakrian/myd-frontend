import { useParams, useNavigate } from "react-router-dom";
import { CardDetalhesTrilhas } from "../../components/CardDetalhesTrilhas/CardDetalhesTrilhas";
import { Habilidades } from "../../components/Habilidades/Habilidades";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import styles from "./DetalhesTrilhas.module.css";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { httpClientJwt } from "../../services/httpClient";
import { Spin } from "antd";

export const DetalhesTrilhas = () => {
  const { trilhaId } = useParams();
  const [trilha, setTrilha] = useState({});
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrilhas = async () => {
    try {
      const response = await httpClientJwt.get(`/trilhas/${trilhaId}`);
      setTrilha(response.data);
      setIsLoading(false);
    } catch (err) {
      setErros([...err.response.data.erros]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrilhas();
  }, [trilhaId]);

  const navigate = useNavigate();

  const handleFollowTrail = async () => {
    try {
      const response = await httpClientJwt.post('/usuarios/seguir-trilha', {
        params: { trilhaId }
      });
      navigate(`/gerar-desafios-trilha/${trilhaId}`);
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  return (
    <Spin spinning={isLoading}>
      <div className={styles.detalhes}>
        <CardDetalhesTrilhas
          text={trilha.nome}
          imageUrl={trilha.nome}
          trilhaId={trilhaId}
        />

        <h2>Pra que serve essa trilha?</h2>
        <p className={styles.descricao}>{trilha.descricao}</p>

        <div className={styles.down}>
          <div className={styles.details}>
            <h3>Habilidades:</h3>

            <Habilidades name={trilha.modalidades} imgUrl={relaxamento} />
          </div>
          <div className={styles.details}>
            <h3>Desafios disponíveis:</h3>
            <p className={styles.desafios}>{trilha.desafios?.length}</p>
          </div>
        </div>
        <Button name={"Quero seguir a Trilha!"} onClick={handleFollowTrail} />
        {erros.length > 0 && <div className={styles.erros}>Erro: {erros.join(', ')}</div>}
      </div>
    </Spin>
  );
};
