import { useEffect, useState } from "react";
import styles from "./Config.module.css";
import { Avatar, Spin } from "antd";
import { Tags } from "../../components/Tags/Tags";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { httpClientJwt } from "../../services/httpClient";

export const ConfigCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dadosConta, setDadosConta] = useState();

  const ofensiva = [
    { title: "Seg", id: 1, ofensiva: true, desafios: 5, color: "#72EB70" },
    { title: "Ter", id: 2, ofensiva: true, desafios: 2, color: "#F2B66D" },
    { title: "Quart", id: 3, ofensiva: false, desafios: 0, color: "#A0A0A0" },
    { title: "Quin", id: 4, ofensiva: false, desafios: 0, color: "#A0A0A0" },
    { title: "Dom", id: 7, ofensiva: false, desafios: 0, color: "#A0A0A0" },
  ];

  const handleBuscarDadosConta = async () => {
    setIsLoading(true);
    try {
      const response = await httpClientJwt.get("/usuarios/detalhes-conta");
      setDadosConta(response.data.dados);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    handleBuscarDadosConta();
  }, [])

  return (
    <Spin spinning={isLoading}>
      <div className={styles.divCol}>
        <div className={styles.uploadImg}>
          <Avatar src={dadosConta?.fotoPerfil} size={"large"} style={{ width: 100, height: 100 }}></Avatar>
        </div>

        <div className={styles.greeting}>
          <h1>Olá, {dadosConta?.nome}!</h1>
          <span>
            Você realizou {ofensiva.filter((e) => e.ofensiva).length} desafios
            hoje!
          </span>
        </div>

        <div className={styles.points}>
          <h1>Total de pontos: 6 pts</h1>
          <span>Você está realizando desafios a 3 dias.</span>
        </div>

        <div className={styles.report}>
          <h2>Relatório Semanal</h2>
        </div>

        <div className={styles.ofensiva}>
          {ofensiva.map((e) => (
            <Tags
              key={e.id}
              title={e.title}
              numero={e.desafios}
              cor={e.color}
              desafios={e.desafios}
            />
          ))}
        </div>
        <div className={styles.buttonDiv}>
          <Link to="/explore">
            <Button name={"Explorar"} className={styles.button} />
          </Link>
        </div>
      </div>
    </Spin>
  );
};
