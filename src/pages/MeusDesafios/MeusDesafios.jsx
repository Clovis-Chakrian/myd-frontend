import { CardDetalhesTrilhas } from '../../components/CardDetalhesTrilhas/CardDetalhesTrilhas';
import { CheckListDesafios } from '../../components/CheckListDesafios/CheckListDesafios';
import { Flex } from "antd";
import styles from './MeusDesafios.module.css'
import Button from "../../components/Button/Button";
import { Cronometro } from './Cronometro/Cronometro';


export const MeusDesafios = () => {
  const handleClick = () => { }
  return (
    <Flex vertical justify='center' className={styles.page} >
      <CardDetalhesTrilhas />
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