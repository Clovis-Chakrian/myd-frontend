import React, { useEffect, useState } from "react";
import logo from "../../../public/icons/logoinitial.png";
import styles from "./Trilhas.module.css";
import { SolidProgress } from "../../components/SolidProgress/SolidProgress";
import InteracaoSocial from "../../../public/TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "../../../public/TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "../../../public/TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "../../../public/TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "../../../public/TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import { CardTrilhas } from "../../components/CardTrilhas/CardTrilhas";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { httpClientJwt } from "../../services/httpClient";
import { Alert, Spin } from "antd";

export const Trilhas = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50);
  const [selectedTrilha, setSelectedTrilha] = useState(null);
  const [trilhas, seTrilhas] = useState([]);
  const [erros, setErros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const trilhasImgMap = {
    "7164b346-5e1e-47b5-b0cb-9b6b0945f3f9": relaxamento,
    "154d820b-fad4-4b51-9083-137c4584bf10": InteracaoSocial,
    "30c8b1c4-7f77-45d7-84db-a49d70f9f5f2": rotinaSaudavel,
    "6d427d15-33f8-4cf9-a842-ad1040899139": praticarGratidao,
    "4f817b0a-b061-46bb-8c21-4fb369be7e54": conexaoNatureza,
    "b9c74014-4554-40f6-a1ec-7a6a8249c429": trabalhoComunitario,
  };

  const listTrilhas = async () => {
    try {
      const response = await httpClientJwt.get("/trilhas");

      seTrilhas(response.data);
      setIsLoading(false);
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  const handleSelect = (index) => {
    if (selectedTrilha === index) {
      setSelectedTrilha(null);
      setProgress(50);
    } else {
      setSelectedTrilha(index);
      setProgress(100);
    }
  };

  const handleSubmit = async (trilhaId) => {
    setIsLoading(true);
    try {
      const response = await httpClientJwt.post("/usuarios/seguir-trilha", {
        trilha: trilhaId,
      });
      if (response.data.sucesso) {
        navigate("/home");
      } else {
        setErros(response.data.erros);
      }
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    listTrilhas();
  }, []);
  return (
    <>
      <Spin spinning={isLoading}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.caixaSubTit}>
              {erros.map((erro) => {
                return (
                  <Alert
                    key={erro}
                    message={erro}
                    type="error"
                    closable
                    onClose={() => setErros(erros.filter((err) => err != erro))}
                  />
                );
              })}
              <h2 className={styles.subtitulo}>
                Para começarmos, escolha uma trilha abaixo :{" "}
              </h2>
            </div>
          </div>
          <SolidProgress name="2/2" progress={progress} />
          <br></br>
          <div className={styles.conjuntoTrilhas}>
            {trilhas.length > 0 &&
              trilhas.map((trilha, index) => (
                <CardTrilhas
                  key={trilha.trilhaId}
                  index={index}
                  text={trilha.nome}
                  imageUrl={trilhasImgMap[trilha.trilhaId]}
                  onClick={() => {
                    handleSelect(index);
                  }}
                  isSelected={selectedTrilha === index}
                />
              ))}
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <Button
            name={"Seguir"}
            className={styles.button}
            disabled={selectedTrilha === null}
            onClick={() => handleSubmit(trilhas[selectedTrilha].trilhaId)}
          />
        </div>
      </Spin>
    </>
  );
};
