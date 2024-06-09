import React, { useEffect, useState } from "react";
import {
  Col,
  Flex,
  Input,
  Layout,
  Row,
  Avatar,
  Typography,
  Badge,
  Button,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  WechatOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { CardContato } from "./CardContato/ContatoCard";
import { Mensagem } from "./Mensagem/Mensagem";
import { mensagensExemplo } from "./mensagensExemplo";
import { contatosExemplo } from "./contatosExemplo";
import { BotaoEnviar } from "./BotaoEnviar/BotaoEnviar";
import { BotaoAnexo } from "./BotaoAnexo/BotaoAnexo";
import { Link } from "react-router-dom";
import style from "./Chat.module.css";

export const Chat = () => {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState(mensagensExemplo);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const enviarMensagem = () => {
    if (!mensagem.trim()) {
      return;
    }

    const novaMensagem = {
      mensagemId: mensagens.length + 1,
      autorId: 0,
      nomeAutor: "Usuário Atual",
      conteudo: mensagem,
      hora: "12h",
    };

    setMensagens([...mensagens, novaMensagem]);
    setMensagem("");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setShowSidebar(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Row>
      <div className={`${style.colChats} ${showSidebar ? style.show : ""}`}>
        <Flex align="center" justify="center">
          <Input
            className={style.inputBuscarMensagem}
            placeholder="Pesquise por uma mensagem..."
            suffix={<SearchOutlined />}
          />
        </Flex>
        <Flex className={style.contatosContainer} vertical gap={20}>
          {contatosExemplo.map((contato) => (
            <CardContato
              key={contato.contatoId}
              contatoNome={contato.contatoNome}
              ultimaMensagem={contato.ultimaMensagem}
              ultimaMensagemHora={contato.ultimaMensagemHora}
            />
          ))}
        </Flex>
      </div>

      <div style={{ flex: 1 }}>
        <Col span={24}>
          <Flex vertical>
            <Layout.Header className={style.cabecalhoChat}>
              <Button
                type="primary"
                shape="circle"
                onClick={toggleSidebar}
                className={style.buttonOpenChatsOpen}
              >
                <WechatOutlined />
              </Button>

              <Link to="/squads">
                <Button className={style.buttonOpenChats} shape="circle">
                  <UsergroupAddOutlined />
                </Button>
              </Link>

              <Flex align="center" justify="center" gap={20}>
                <Badge count={1} color="#000">
                  <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>

                <Flex vertical align="center">
                  <Typography.Title className={style.nomeSquad} level={5}>
                    Marmotas
                  </Typography.Title>
                  <Typography.Text className={style.numeroSquad}>
                    Squad 0067
                  </Typography.Text>
                </Flex>
              </Flex>
              <Typography.Text>5/5 Completos</Typography.Text>
            </Layout.Header>
            <Flex className={style.mensagensContainer} vertical>
              {mensagens.map((mensagem) => (
                <Mensagem
                  key={mensagem.mensagemId}
                  nomeAutor={mensagem.nomeAutor}
                  conteudo={mensagem.conteudo}
                  hora={mensagem.hora}
                  fotoPerfil="http://localhost:5173/src/pages/SobreNos/membros/Rodrigo.jpg"
                  mostrarFotoPerfil={
                    mensagens.indexOf(mensagem) === 0 ||
                    mensagens[mensagens.indexOf(mensagem) - 1].nomeAutor !==
                      mensagem.nomeAutor
                  }
                  mostrarNomeAutor={
                    mensagens.indexOf(mensagem) === 0 ||
                    mensagens[mensagens.indexOf(mensagem) - 1].nomeAutor !==
                      mensagem.nomeAutor
                  }
                  mostrarHora={
                    mensagens[mensagens.indexOf(mensagem) + 1] != null
                      ? mensagens[mensagens.indexOf(mensagem) + 1].nomeAutor !==
                        mensagem.nomeAutor
                      : false
                  }
                  ultimaMensagemSeguida={
                    mensagens[mensagens.indexOf(mensagem) + 1] != null
                      ? mensagens[mensagens.indexOf(mensagem) + 1].nomeAutor !==
                        mensagem.nomeAutor
                      : false
                  }
                  usuarioAtual={mensagem.autorId === 0}
                />
              ))}
            </Flex>

            <Flex align="center" justify="center">
              <Input
                prefix={
                  <BotaoAnexo
                    clickFunction={() => alert("Você inseriu um anexo!")}
                  />
                }
                placeholder="Digite sua mensagem..."
                className={style.mensagemInput}
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
                onPressEnter={enviarMensagem}
                suffix={<BotaoEnviar clickFunction={enviarMensagem} />}
              />
            </Flex>
          </Flex>
        </Col>
      </div>
    </Row>
  );
};
