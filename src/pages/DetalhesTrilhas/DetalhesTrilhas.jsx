import { useParams, useNavigate } from "react-router-dom";
import { CardDetalhesTrilhas } from "../../components/CardDetalhesTrilhas/CardDetalhesTrilhas";
import { Habilidades } from "../../components/Habilidades/Habilidades";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import styles from "./DetalhesTrilhas.module.css"
import Button from "../../components/Button/Button";


export const DetalhesTrilhas = () =>{

    const {trilhaId} = useParams();
    const desafios = "700";
    const descricao = "orem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores nesciunt laboriosam id dolorem, aperiam odit tenetur ipsum at cum eligendi dolores recusandae accusamus sunt adipisci ipsa cupiditate. Animi at dolorum optio tenetur adipisci libero explicabo earum provident velit placeat, aliquid facilis eum nobis molestiae voluptates eligendi quam veritatis odio itaque non. Sit quia obcaecati itaque quidem enim expedita, veritatis unde assumenda! Praesentium hic necessitatibus minima perspiciatis ipsa aliquam, pariatur nam quia repellendus itaque asperiores tempora incidunt facere deserunt minus laborum omnis labore amet ipsam soluta! Accusantium recusandae saepe velit reprehenderit fugiat dignissimos repudiandae perferendis esse eaque? Corrupti repellendus ad cum, nostrum magni iusto, porro est optio itaque libero quo officia inventore et nemo fugit qui odit iure exercitationem molestiae accusamus iste ratione. Dolores eius, quo quasi quam modi cum nisi iste eveniet ut, repellat, laboriosam voluptatibus mollitia. Quam iure nulla dolores eligendi. Magni officia recusandae architecto ducimus corrupti repellendus quae aspernatur tempore, doloribus impedit beatae? Eius aperiam qui ipsa laboriosam libero delectus quia, explicabo corrupti error ut numquam sit expedita aliquid praesentium aspernatur nisi magni accusamus! Voluptatibus voluptate doloribus eum velit odio labore, consectetur voluptates doloremque, ipsam omnis saepe odit excepturi aperiam? Nulla, adipisci! Quibusdam voluptatem delectus officia sit."

    const navigate = useNavigate();
    const handleClick = () => navigate(`/gerar-desafios-trilha/${trilhaId}`);

    return(
        <div className={styles.detalhes}>
            <CardDetalhesTrilhas 
            text=",,,"
            imageUrl= {relaxamento}
            trilhaId ={trilhaId}
            />

            <h2>Pra que serve essa trilha?</h2>
            <p className={styles.descricao}>{descricao}</p>

            <div className={styles.down}>

            <div className={styles.details}>
                <h3>Habilidades:</h3>

                <Habilidades name="name" imgUrl={relaxamento}/>

            </div>
            <div className={styles.details}>
                <h3>Desafios disponíveis:</h3>
                <p className={styles.desafios}>{desafios}</p>
            </div>
            </div>
            <Button
            name={"Quero seguir a Trilha!"}
            onClick={handleClick}
            />

        </div>
    );
}
