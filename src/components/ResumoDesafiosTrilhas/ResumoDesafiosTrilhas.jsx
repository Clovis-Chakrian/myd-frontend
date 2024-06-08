import styles from './ResumoDesafiosTrilhas.module.css';

export const ResumoDesafiosTrilhas = ({ desafiosConcluidos, totalDesafios }) => {
    return (
        <div className={styles.resume}>
            <p>Você já realizou </p>
            <span className={styles.destaque}>{desafiosConcluidos} / {totalDesafios} </span>
            <p>dos desafios de hoje!</p>
        </div>
    );
};
