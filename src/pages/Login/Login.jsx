import { useEffect, useState } from "react";
import img from "../../../public/icons/login.png";
import logo from "../../../public/icons/logo.png";
import styles from "./Login.module.css";
import { Alert, Form, Input, Spin } from "antd";
import Button from "../../components/Button/Button";
import {
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import ButtonRegister from "../../components/ButtonRegister/Button";
import { httpClient } from "../../services/httpClient";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true);
  const [erros, setErros] = useState([]);
  const [formValues, setFormValues] = useState({
    email: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((currentFormValues) => {
      const newFormValues = {
        ...currentFormValues,
        [name]: value,
      }

      setIsDisabled(!Object.values(newFormValues).every((value) => value.trim() != ""));

      return newFormValues;
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await httpClient.post("/login", {
        email: formValues.email,
        senha: formValues.senha
      });

      localStorage.setItem('jwt_token', response.data.dados);
      navigate('/home');
    } catch (err) {
      setErros([...err.response.data.erros]);
    }
    setIsLoading(false);
  }

  const handleIsAutenticado = () => {
    const token = localStorage.getItem("jwt_token");

    if (token) navigate("/home");
  }

  useEffect(() => {
    handleIsAutenticado();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.subtitle}>Bem vindo de volta!</p>
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
              validateTrigger
            >
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
                label="Senha"
                name={["user", "senha"]}
                rules={[
                  { required: true, message: "Por favor, digite sua senha!" },
                ]}
              >
                <Input.Password name="senha" onChange={handleInputChange} />
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
                name={"Entrar"}
                className={styles.button}
                htmlType="submit"
                onClick={handleLogin}
                disabled={isDisabled}
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
