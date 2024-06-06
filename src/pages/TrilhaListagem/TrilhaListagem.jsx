import { BarraPesquisaTrilha } from "../../components/BarraPesquisaTrilha/BarraPesquisaTrilha";
import { TabsTrilha } from "../../components/TabsTrilha/TabsTrilha";
import styles from "./TrilhaListagem.module.css";
import InteracaoSocial from "../../../public/TrilhasImg/trilhaInteracaoSocial.png";
import rotinaSaudavel from "../../../public/TrilhasImg/trilhaRotinaSaudavel.png";
import praticarGratidao from "../../../public/TrilhasImg/trilhaPraticarGratidao.png";
import conexaoNatureza from "../../../public/TrilhasImg/trilhaConexaoNatureza.png";
import trabalhoComunitario from "../../../public/TrilhasImg/trilhaTrabalhoComunitario.png";
import relaxamento from "../../../public/TrilhasImg/trilhaRelaxamento.png";
import { CardListagemTrilhas } from "../../components/CardListagemTrilhas/CardListagemTrilhas";


export const TrilhaListagem = () => {
  
  const trilhas = [
    { titulo: "Relaxamento", imageUrl: relaxamento , trilhaId : 1},
    { titulo: "Interação Social", imageUrl: trabalhoComunitario, trilhaId : 2 },
    { titulo: "Rotina Saúdavel", imageUrl: conexaoNatureza,  trilhaId : 3},
    { titulo: "Praticar Gratidão", imageUrl: praticarGratidao,  trilhaId : 4 },
    { titulo: "Conexão com a Natureza", imageUrl: rotinaSaudavel , trilhaId : 5 },
    { titulo: "Trabalho Comunitário", imageUrl: InteracaoSocial ,  trilhaId : 6},
  ];
  
  return (
    <div className={styles.center}>
      <TabsTrilha></TabsTrilha>
      <hr className={styles.line} />

      <BarraPesquisaTrilha />


      <div className={styles.list}>
        {trilhas.map((trilha, index) => (
          <CardListagemTrilhas
            key={index}
            index={index}
            text={trilha.titulo}
            imageUrl={trilha.imageUrl}
            trilhaId={trilha.trilhaId}
          />
          
        ))}
      </div>
    </div>
  );
};
