import style from "./ListagemSquad.module.css";
import { Row } from "antd";
import capivara from "./mascote/capivara.jpg";
import foca from "./mascote/foca.jpg";
import marmota from "./mascote/marmota.jpg";
import { Opcao } from "./Opcao";
import { ContentLayout } from "../../components/ContentLayout/ContentLayout";

export const ListagemSquad = () => {
  const mascotes = [
    {
      nome: "marmota",
      img: marmota,
    },
    {
      nome: "foca",
      img: foca,
    },
    {
      nome: "capivara",
      img: capivara,
    },
  ];

  return (
    <ContentLayout>
      <Row className={style.rowOne}>
        <h2>Selecione um Squad:</h2>
        {mascotes.map((item, index) => (
          <Opcao key={index} mascote={item} />
        ))}
      </Row>
    </ContentLayout>
  );
};
