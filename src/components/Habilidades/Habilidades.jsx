import styles from './Habilidades.module.css'

export const Habilidades= ({imgUrl,name}) =>{
    return(
         <div className={styles.center}>
            <div className={styles.circle}>
                <img src={imgUrl} alt="Imagem relacionada a habilidade da Trilha" />
            </div>
            <p>{name}</p>
        </div>
    );
}