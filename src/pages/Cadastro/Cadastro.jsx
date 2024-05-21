import React, { useState } from "react";
import img from "../../../public/icons/imgCadastro.png";
import logo from "../../../public/icons/logo.png";
import styles from "./Cadastro.module.css";
import { Form, Input, DatePicker, Select } from "antd";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import {
  GoogleOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import ButtonRegister from "../../components/ButtonRegister/Button";

export const Cadastro = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const isFormEmpty = !Object.values(formValues).every((value) => value.trim());

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.subtitle}>Bem vindo!</p>
        </div>
        <div className={styles.form}>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            className={styles.formItem}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Nome de usuário"
              name={["user", "username"]}
              rules={[
                { required: true, message: "Por favor, digite seu nome de usuário" },
              ]}
            >
              <Input name="username" onChange={handleInputChange} />
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
              <DatePicker name="dataNascimento" onChange={handleInputChange} />
            </Form.Item>

            <Form.Item
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
              <ButtonRegister
                icon={<GithubOutlined />}
                className={styles.buttonRegister}
              />
            </div>
            <Link to="/ball">
              <Button
                name={"Cadastrar"}
                className={styles.button}
                htmlType="submit"
                disabled={isFormEmpty}
              />
            </Link>
          </Form>
        </div>
      </div>
      <div className={styles.imagem}>
        <img src={img} alt="Imagem" />
      </div>
    </div>
  );
};
