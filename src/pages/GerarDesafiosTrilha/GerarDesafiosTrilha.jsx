import { CardDetalhesTrilhas } from "../../components/CardDetalhesTrilhas/CardDetalhesTrilhas";
import { CheckListDesafios } from "../../components/CheckListDesafios/CheckListDesafios";
import { SelectDifuldade } from "../../components/SelectDificuldade/SelectDificuldade";
import Button from "../../components/Button/Button";
import styles from "./GerarDesafiosTrilha.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { httpClientJwt } from "../../services/httpClient";
import { Spin } from "antd";

export const GerarDesafiosTrilha = () => {
  const { trilhaId } = useParams();
  const [trilha, setTrilha] = useState([]);
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
  const handleClick = () => navigate(`/gerar-desafios-trilha/${trilhaId}`);
  const [dificuldade, setDificuldade] = useState("Fácil");

  return (
    <Spin spinning={isLoading}>
      <div className={styles.page}>
        <div className={styles.center}>
          <CardDetalhesTrilhas
            text={trilha.nome}
            imageUrl={trilha.imageUrl}
            trilhaId={trilhaId}
          />
          <SelectDifuldade setDificuldade={(valor) => setDificuldade(valor)} />
          <div className={styles.list}>
            <CheckListDesafios dificuldade={dificuldade} />
          </div>
        </div>
        <Button name={"Aceito os desafios!"} onClick={handleClick} />
      </div>
    </Spin>
  );
};
