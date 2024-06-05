import { useState } from "react";
import img from "../../../public/icons/imgCadastro.png";
import logo from "../../../public/icons/logo.png";
import styles from "./Cadastro.module.css";
import { Form, Input, DatePicker, Alert } from "antd";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import {
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import ButtonRegister from "../../components/ButtonRegister/Button";
import { httpClient } from "../../services/httpClient";

export const Cadastro = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [erros, setErros] = useState([]);
  const [formValues, setFormValues] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    senhaConfirma: "",
    dataNascimento: null
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(currentValues => {
      const newFormValues = {
        ...currentValues,
        [name]: value.trim(),
      }

      setIsDisabled(!Object.values(newFormValues).every((value) => value.trim() != ""));

      return newFormValues;
    });
  };

  const handleCadastro = async () => {
    try {
      const usuarioNovoDto = {
        nome: formValues.nomeCompleto,
        email: formValues.email,
        senha: formValues.senha,
        dataNascimento: formValues.dataNascimento
      }

      const response = await httpClient.post("/signup", {
        ...usuarioNovoDto
      });

      localStorage.setItem('jwt_token', response.data.dados);
      navigate('/ball');
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
  }

  return (
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

            {/* <Form.Item
              label="País"
              name={["user", "pais"]}
              rules={[
                { required: true, message: "Por favor, informe seu país" },
              ]}
            >
              <Select name="pais" onChange={handleInputChange}>
                <Select.Option value="Brasil">Brasil</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Estado"
              name={["user", "estado"]}
              rules={[
                { required: true, message: "Por favor, seu informe seu Estado" },
              ]}
            >
              <Select name="estado" onChange={handleInputChange}>
                <Select.Option value="PE">Pernambuco</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Cidade"
              name={["user", "cidade"]}
              rules={[
                { required: true, message: "Por favor, seu informe seu Estado" },
              ]}
            >
              <Select name="cidade" onChange={handleInputChange}>
                <Select.Option value="Recife">Recife</Select.Option>
              </Select>
            </Form.Item> */}

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
  );
};
