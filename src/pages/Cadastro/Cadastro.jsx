import React, { useState } from "react";
import img from "../../../public/icons/imgCadastro.png";
import logo from "../../../public/icons/logo.png";
import styles from "./Cadastro.module.css";
import { Form, Input } from "antd";
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
              label="Username"
              name={["user", "username"]}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input name="username" onChange={handleInputChange} />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input name="email" onChange={handleInputChange} />
            </Form.Item>

            <Form.Item
              name={["user", "password"]}
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password name="password" onChange={handleInputChange} />
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

            <Link to="/home">
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
