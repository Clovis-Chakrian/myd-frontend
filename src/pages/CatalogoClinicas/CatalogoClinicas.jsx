import { Space, Row, Col } from "antd";
import ButtonPrimary from "../../components/Button/Button";
import { CardLayout } from "../../components/Card/Card";
import { AppLayout } from "../../components/AppLayout/AppLayout";
import imgAc from "../../../public/imgClinicas/Ac Clínica.jpg";
import imgCliapsi from "../../../public/imgClinicas/Cliapsi Psicologia.jpg";
import imgClimepe from "../../../public/imgClinicas/Climepe.png";
import imgClinpsi from "../../../public/imgClinicas/Clinpsi.jpg";
import imgFazer from "../../../public/imgClinicas/Espaço Fazer.jpg";

export const CatalogoClinicas = () => {
  const clinicas = [
    {
      name: "Ac Clínica",
      id: 1,
      url: "https://www.doctoralia.com.br/clinicas/ac-clinica-e-consultoria-em-psicologia#address-id=65422&filters%5Bspecializations%5D%5B%5D=76&filters%5Bentity_type%5D%5B%5D=facility",
      logo: imgAc,
    },
    {
      name: "Cliapsi Psicologia",
      id: 2,
      url: "https://www.doctoralia.com.br/clinicas/cliapsi-psicologia#address-id=60174&filters%5Bspecializations%5D%5B%5D=76&filters%5Bentity_type%5D%5B%5D=facility",
      logo: imgCliapsi,
    },
    {
      name: "Climepe",
      id: 3,
      url: "https://www.doctoralia.com.br/clinicas/climepe-clinica-de-medicina-psicologia-e-especialidades#address-id=16874&filters%5Bspecializations%5D%5B%5D=76&filters%5Bentity_type%5D%5B%5D=facility",
      logo: imgClimepe,
    },
    {
      name: "Clinpsi",
      id: 4,
      url: "https://www.doctoralia.com.br/clinicas/clinpsi-clinica-de-psicologia-integrada#address-id=48303&filters%5Bspecializations%5D%5B%5D=76&filters%5Bentity_type%5D%5B%5D=facility",
      logo: imgClinpsi,
    },
    {
      name: "Espaço Fazer",
      id: 5,
      url: "https://www.doctoralia.com.br/clinicas/espaco-fazer-psicologia-integrada#address-id=51977&filters%5Bspecializations%5D%5B%5D=76&filters%5Bentity_type%5D%5B%5D=facility",
      logo: imgFazer,
    },
  ];

  const handleSaibaMaisClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <AppLayout>
      <Space direction="vertical" size={16}>
        <Row gutter={[16, 16]}>
          {clinicas.map((clinica) => (
            <Col key={clinica.id} xs={24} sm={24} md={8} lg={8} xl={8}>
              <CardLayout cardTitle={clinica.name} CardImg={clinica.logo}>
                <ButtonPrimary
                  onClick={() => handleSaibaMaisClick(clinica.url)}
                  name={"Saiba Mais"}
                ></ButtonPrimary>
              </CardLayout>
            </Col>
          ))}
        </Row>
      </Space>
    </AppLayout>
  );
};
