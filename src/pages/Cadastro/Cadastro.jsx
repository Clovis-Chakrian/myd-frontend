import { useEffect, useState } from "react";
import img from "../../../public/icons/imgCadastro.png";
import logo from "../../../public/icons/logoinitial.png";
import styles from "./Cadastro.module.css";
import { Form, Input, DatePicker, Alert, Spin, Image, Upload, Flex } from "antd";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import {
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import ButtonRegister from "../../components/ButtonRegister/Button";
import { httpClient } from "../../services/httpClient";
import { UploadPerfilFotoButton } from "./UploadPerfilFotoButton/UploadPerfilFotoButton";

export const Cadastro = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [erros, setErros] = useState([]);
  const [formValues, setFormValues] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    senhaConfirma: "",
    dataNascimento: null,
    fotoPerfil: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(currentValues => {
      const newFormValues = {
        ...currentValues,
        [name]: typeof (value) == 'string' ? value.trim() : value,
      }

      setIsDisabled(!Object.values(newFormValues).every((value) => value != "" && value != null));

      return newFormValues;
    });
  };

  const handleCadastro = async () => {
    setIsLoading(true);
    try {
      const usuarioNovoDto = new FormData();
      usuarioNovoDto.append('nome', formValues.nomeCompleto);
      usuarioNovoDto.append('email', formValues.email);
      usuarioNovoDto.append('senha', formValues.senha);
      usuarioNovoDto.append('dataNascimento', new Date(formValues.dataNascimento));
      usuarioNovoDto.append('fotoPerfil', formValues.fotoPerfil);
      const response = await httpClient.post("/signup", usuarioNovoDto, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      localStorage.setItem('jwt_token', response.data.dados);
      navigate('/ball');
    } catch (err) {
      setErros([...err.response.data.erros]);

    }
    setIsLoading(false);
  }

  const handleIsAutenticado = () => {
    const token = localStorage.getItem("jwt_token");

    if (token) navigate("/home");
  }

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  useEffect(() => {
    handleIsAutenticado();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.subtitle}>Bem vindo!</p>
          </div>
          <div className={styles.form}>
            <div className={styles.errosContainer}>
              {erros.map(erro => {
                return (
                  <Alert
                    key={erro}
                    message={erro}
                    type="error"
                    closable
                    onClose={() => setErros(erros.filter(err => err != erro))}
                  />
                );

              })}
            </div>
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              className={styles.formItem}
              initialValues={{ remember: true }}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                className={styles.imgUpload}
                label="Foto de Perfil"
                name={["user", "foto"]}
                rules={[
                  { required: true, message: "Por favor, faça o upload de sua foto" },
                ]}
              >
                <Upload
                  action={file => handleInputChange({ target: { name: "fotoPerfil", value: file } })}
                  listType="picture-circle"
                  fileList={fileList}
                  data={e => console.log(e)}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : UploadPerfilFotoButton}
                </Upload>
                {previewImage && (
                  <Image
                    wrapperStyle={{
                      display: "none",
                    }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                  />
                )}
              </Form.Item>

              <Form.Item
                label="Nome Completo"
                name={["user", "nomeCompleto"]}
                rules={[
                  { required: true, message: "Por favor, digite seu nome completo" },
                ]}
              >
                <Input name="nomeCompleto" onChange={handleInputChange} />
              </Form.Item>

              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  { required: true, message: 'Digite seu email' },
                  { type: 'email', message: 'Email inválido' }
                ]}
              >
                <Input name="email" onChange={handleInputChange} />
              </Form.Item>

              <Form.Item
                label="Data de Nascimento"
                name={["user", "dataNascimento"]}
                rules={[
                  { required: true, message: "Por favor, coloque sua data de nascimento!" },
                ]}
              >
                <DatePicker style={{ width: '100%' }} name="dataNascimento" onChange={(e, date) => handleInputChange({ e, target: { name: "dataNascimento", value: date } })} />
              </Form.Item>

              <Form.Item
                label="Senha"
                name={["user", "senha"]}
                rules={[
                  { required: true, message: "Por favor, digite sua senha!" },
                ]}
              >
                <Input.Password name="senha" onChange={handleInputChange} />
              </Form.Item>

              <Form.Item
                label="Confirme sua senha"
                name={["user", "senhaConfirma"]}
                rules={[
                  { required: true, message: "Por favor, confime sua senha!" },
                ]}
              >
                <Input.Password name="senhaConfirma" onChange={handleInputChange} />
              </Form.Item>


              <div className={styles.buttonsRegister}>
                <ButtonRegister
                  icon={<LinkedinOutlined />}
                  className={styles.buttonRegister}
                />
                <ButtonRegister
                  icon={<GoogleOutlined />}
                  className={styles.buttonRegister}
                />
              </div>
              <Button
                name={"Cadastrar"}
                className={styles.button}
                htmlType="submit"
                disabled={isDisabled}
                onClick={handleCadastro}
              />
            </Form>
          </div>
        </div>
        <div className={styles.imagem}>
          <img src={img} alt="Imagem" />
        </div>
      </div>
    </Spin>
  );
};
