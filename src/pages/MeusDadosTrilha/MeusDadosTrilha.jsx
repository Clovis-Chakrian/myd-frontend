import { useParams } from "react-router-dom";
import { CardDetalhesTrilhas } from "../../components/CardDetalhesTrilhas/CardDetalhesTrilhas";
import { Habilidades } from "../../components/Habilidades/Habilidades";
import { Flex } from "antd";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import styles from "./MeusDadosTrilha.module.css"
import { CardDesafioConcluido } from "./CardDesafioConcluida/CardDesafioConcluido";
import { useEffect, useState } from "react";
import { httpClientJwt } from "../../services/httpClient";

export const MeusDadosTrilha = () => {
  const pontos = "700";
  const diasOfensiva = 12;
  const { trilhaId } = useParams();
  const [trilha, setTrilha] = useState({});
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTrilha = async () => {
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
    fetchTrilha();
  }, [trilhaId]);  

  return (
    <div className={styles.detalhes}>
      <CardDetalhesTrilhas
        text={trilha.nome}
        imageUrl={trilha.imageUrl}
        trilhaId={trilhaId}
      />

      <Flex className={styles.pontuacaoContainer} align="center" justify="space-evenly" >
        <div className={styles.details}>
          <h3>Meus pontos:</h3>
          <p className={styles.desafios}>{pontos}</p>
        </div>

        <div className={styles.details}>
          <h3>Meus dias de ofensiva:</h3>
          <p className={styles.desafios}>{diasOfensiva}</p>
        </div>
      </Flex>

      <Flex align="left" justify="space-evenly" vertical>
        <h3>Desafios Concluídos</h3>

        <Flex gap={40} >
          <CardDesafioConcluido descricao={"Comer banana três vezes"}/>
          <CardDesafioConcluido descricao={"Comer banana três vezes"}/>
          <CardDesafioConcluido descricao={"Comer banana três vezes"}/>
        </Flex>
      </Flex>

      <div className={styles.down}>
        <h3>Minhas Habilidades:</h3>
        <div className={styles.details}>
          <Flex gap={40} justify="space-between">
            <Habilidades name="name" imgUrl={relaxamento} />
            <Habilidades name="name" imgUrl={relaxamento} />
            <Habilidades name="name" imgUrl={relaxamento} />
            <Habilidades name="name" imgUrl={relaxamento} />
            <Habilidades name="name" imgUrl={relaxamento} />
          </Flex>
        </div>
      </div>
    </div>
  );
}
