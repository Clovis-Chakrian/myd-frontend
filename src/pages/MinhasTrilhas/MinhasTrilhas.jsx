import { TabsTrilha } from "../../components/TabsTrilha/TabsTrilha";
import { CardMinhasTrilhas } from "../../components/CardMinhasTrilhas/CardMinhasTrilhas";
import styles from "./MinhasTrilhas.module.css";
import InteracaoSocial from "../../../public/TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "../../../public/TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "../../../public/TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "../../../public/TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "../../../public/TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import { ContadorTrilhas } from "../../components/ContadorTrilhas/ContadorTrilhas";
import { Spin } from "antd";

export const MinhasTrilhas = () => {
  const trilhas = [
    { titulo: "Relaxamento", imageUrl: relaxamento, trilhaId: 1 },
    { titulo: "Interação Social", imageUrl: trabalhoComunitario, trilhaId: 2 },
    { titulo: "Rotina Saúdavel", imageUrl: conexaoNatureza, trilhaId: 3 },
    { titulo: "Praticar Gratidão", imageUrl: praticarGratidao, trilhaId: 4 },
    { titulo: "Conexão com a Natureza", imageUrl: rotinaSaudavel, trilhaId: 5 },
    { titulo: "Trabalho Comunitário", imageUrl: InteracaoSocial, trilhaId: 6 },
  ];

  return (
    <Spin spinning={isLoading}>
      <div className={styles.center}>
        <TabsTrilha />
        <hr className={styles.line} />
        <ContadorTrilhas contador={3} total={5} />
        <div className={styles.list}>
          {trilhas.map((trilha, index) => (
            <CardMinhasTrilhas
              key={index}
              index={index}
              text={trilha.titulo}
              imageUrl={trilha.imageUrl}
              trilhaId={trilha.trilhaId}
            />
          ))}
        </div>
      </div>
    </Spin>
  );
};
