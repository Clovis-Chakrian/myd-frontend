import { CardDetalhesTrilhas } from '../../components/CardDetalhesTrilhas/CardDetalhesTrilhas';
import { CheckListDesafios } from '../../components/CheckListDesafios/CheckListDesafios';
import { Flex } from "antd";
import styles from './MeusDesafios.module.css'
import Button from "../../components/Button/Button";
import { Cronometro } from './Cronometro/Cronometro';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { httpClientJwt } from '../../services/httpClient';

export const MeusDesafios = () => {
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

  const navigate = useNavigate();
  const handleClick = () => navigate('/home')
  
  return (
    <Flex vertical justify='center' className={styles.page} >
      <CardDetalhesTrilhas trilhaId={trilhaId} imageUrl={trilha.imageUrl} text={trilha.nome} />
      <h1 style={{fontFamily:'Poppins', fontWeight:'600'}}>Seus desafios estão prontos!</h1>
      <div className={styles.desafios}>
        <div className={styles.list}><CheckListDesafios /></div>
        <div className={styles.timer}>
          <h2>Você tem :</h2>
          <Cronometro></Cronometro>
          <h2>Para concluí-los!</h2>
        </div>
      </div>
      <Button
        name={"Desafios feitos!"}
        onClick={handleClick}
      />
    </Flex>


  );
}