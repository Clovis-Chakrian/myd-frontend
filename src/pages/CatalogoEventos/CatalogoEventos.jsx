import { Space, Row, Col } from "antd";
import ButtonPrimary from "../../components/Button/Button";
import { CardLayout } from "../../components/Card/Card";
import { ContentLayout } from "../../components/ContentLayout/ContentLayout";

import imgCeara from "../../../public/imgEventos/imgCeara.jpg";
import imgHenryKlaus from "../../../public/imgEventos/imgHenryKlaus.jpg";
import imgDuetos from "../../../public/imgEventos/imgDuetos.jpg";
import imgNany from "../../../public/imgEventos/imgNany.jpg";
import imgRoberto from "../../../public/imgEventos/imgRoberto.jpg";



export const CatalogoEventos = () => {
  const eventos = [
    {
      name: "Emerson Ceará - Se Acalme",
      id: 1,
      url: "https://bileto.sympla.com.br/event/92257/d/256152?_gl=1*1moj6by*_ga*MTMwNjAwNjk2MC4xNzE2NzQ3OTM0*_ga_KXH10SQTZF*MTcxNjc1MDgyOC4yLjEuMTcxNjc1MTc5MC42MC4wLjE5NTQzMDI5OTM",
      logo: imgCeara,
    },
    {
      name: "Henry e Klaus - Ilusionismo",
      id: 2,
      url: "https://bileto.sympla.com.br/event/88243/d/223728?_gl=1*oguwlo*_ga*MTMwNjAwNjk2MC4xNzE2NzQ3OTM0*_ga_KXH10SQTZF*MTcxNjc1MDgyOC4yLjEuMTcxNjc1MjA0MS4zMS4wLjE5NTQzMDI5OTM",
      logo: imgHenryKlaus,
    },
    {
      name: "Duetos - A Comédia de Peter Quilter",
      id: 3,
      url: "https://bileto.sympla.com.br/event/93845?_gl=1*b2wk05*_ga*MTMwNjAwNjk2MC4xNzE2NzQ3OTM0*_ga_KXH10SQTZF*MTcxNjc1MDgyOC4yLjEuMTcxNjc1Mjc1Mi4zNy4wLjE5NTQzMDI5OTM",
      logo: imgDuetos,
    },
    {
      name: "Nany People - Sob Medida",
      id: 4,
      url: "https://www.sympla.com.br/evento/nany-people-em-recife-sob-medida-nany-canta-fafa/2439902",
      logo: imgNany,
    },
    {
      name: "NU'ZS - Amores, a Música e Palavra de Roberti e Erasmo Carlos ",
      id: 5,
      url: "https://bileto.sympla.com.br/event/92430?_gl=1*pz8v0v*_ga*MTMwNjAwNjk2MC4xNzE2NzQ3OTM0*_ga_KXH10SQTZF*MTcxNjc1MDgyOC4yLjEuMTcxNjc1MzA0Ni42MC4wLjE5NTQzMDI5OTM",
      logo: imgRoberto,
    },
  ];

  const handleSaibaMaisClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ContentLayout>
      <Space direction="vertical" size={16} style={{ marginLeft: "50px" }}>
        <Row gutter={[16, 16]}>
          {eventos.map((evento) => (
            <Col key={evento.id} xs={24} sm={24} md={8} lg={8} xl={8}>
              <CardLayout cardTitle={evento.name} CardImg={evento.logo}>
                <ButtonPrimary
                  onClick={() => handleSaibaMaisClick(evento.url)}
                  name={"Saiba Mais"}
                ></ButtonPrimary>
              </CardLayout>
            </Col>
          ))}
        </Row>
      </Space>
    </ContentLayout>
  );
};

export default CatalogoEventos;
