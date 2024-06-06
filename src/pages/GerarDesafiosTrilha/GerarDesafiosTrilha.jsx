import { CardDetalhesTrilhas } from '../../components/CardDetalhesTrilhas/CardDetalhesTrilhas';
import { CheckListDesafios } from '../../components/CheckListDesafios/CheckListDesafios';
import { SelectDifuldade } from '../../components/SelectDificuldade/SelectDificuldade';
import Button from "../../components/Button/Button";
import styles from './GerarDesafiosTrilha.module.css'
import { useParams, useNavigate } from "react-router-dom";


export const GerarDesafiosTrilha =()=>{
    const {trilhaId} = useParams();
    const navigate = useNavigate();
    const handleClick = () => navigate(`/gerar-desafios-trilha/${trilhaId}`);
    return(
        <div className={styles.page}>
            <div className={styles.center}>
                <CardDetalhesTrilhas/>
                <SelectDifuldade/>
               <div className={styles.list}><CheckListDesafios/></div>
            </div>
               <Button
                name={"Aceito os desafios!"}
                onClick={handleClick}
                />
        </div>
    );
}