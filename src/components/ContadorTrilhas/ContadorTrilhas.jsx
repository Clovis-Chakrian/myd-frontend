import styles  from './ContadorTrilhas.module.css'

export const ContadorTrilhas = ({contador, total}) =>{
    return(
    <div className={styles.left}>
        <div className={styles.circle}>
            {contador}/{total}
        </div>
    </div>
    );
}