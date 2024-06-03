import { Col, Flex, Input, Layout, Row, Avatar, Typography, Badge } from "antd";
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { CardContato } from "./CardContato/ContatoCard";
import style from "./Chat.module.css";
import { Mensagem } from "./Mensagem/Mensagem";
import { mensagensExemplo } from "./mensagensExemplo";
import { contatosExemplo } from "./contatosExemplo";
import { BotaoEnviar } from "./BotaoEnviar/BotaoEnviar";
import { BotaoAnexo } from "./BotaoAnexo/BotaoAnexo"
import { useState } from "react";

export const Chat = () => {
  const [mensagem, setMensagem] = useState();
  const [mensagens, setMensagens] = useState(mensagensExemplo);

  function enviarMensagem() {
    if (mensagem == null || mensagem == "") {
      return;
    }

    const novaMensagem = {
      mensagemId: mensagens.length + 1,
      autorId: 0,
      nomeAutor: "Usuário Atual",
      conteudo: mensagem,
      hora: "12h"
    };

    setMensagens([...mensagens, novaMensagem]);
    setMensagem("");
  }

  return (
    <Row>
      <Col span={6}>
        <Flex align="center" justify="center">
          <Input
            className={style.inputBuscarMensagem}
            placeholder="Pesquise por uma mensagem..."
            suffix={<SearchOutlined />}
          />
        </Flex>

        <Flex className={style.contatosContainer} vertical gap={20}>
          {contatosExemplo.map(contato => {
            return (
              <CardContato
                key={contato.contatoId}
                contatoNome={contato.contatoNome}
                ultimaMensagem={contato.ultimaMensagem}
                ultimaMensagemHora={contato.ultimaMensagemHora}
              />
            )
          })}
        </Flex>
      </Col>

      <Col span={18}>
        <Flex vertical>
          <Layout.Header className={style.cabecalhoChat}>
            <div></div>

            <Flex align="center" justify="center" gap={20}>
              <Badge count={1} color="#000">
                <Avatar shape="circle" icon={<UserOutlined />} />
              </Badge>

              <Flex vertical align="center">
                <Typography.Title className={style.nomeSquad} level={5}>Marmotas</Typography.Title>
                <Typography.Text className={style.numeroSquad}>Squad 0067</Typography.Text>
              </Flex>
            </Flex>

            <Flex>
              <Typography.Text>5/5 Completos</Typography.Text>
            </Flex>
          </Layout.Header>
          <Flex className={style.mensagensContainer} vertical>
            {mensagens.map(mensagem => {
              return (
                <Mensagem
                  key={mensagem.mensagemId}
                  nomeAutor={mensagem.nomeAutor}
                  conteudo={mensagem.conteudo}
                  hora={mensagem.hora}
                  fotoPerfil="http://localhost:5173/src/pages/SobreNos/membros/Rodrigo.jpg"
                  mostrarFotoPerfil={mensagens.indexOf(mensagem) == 0 ? true : mensagens[mensagens.indexOf(mensagem) - 1].nomeAutor !== mensagem.nomeAutor}
                  mostrarNomeAutor={mensagens.indexOf(mensagem) == 0 ? true : mensagens[mensagens.indexOf(mensagem) - 1].nomeAutor !== mensagem.nomeAutor}
                  mostrarHora={mensagens[mensagens.indexOf(mensagem) + 1] != null ? mensagens[mensagens.indexOf(mensagem) + 1].nomeAutor != mensagem.nomeAutor : false}
                  ultimaMensagemSeguida={mensagens[mensagens.indexOf(mensagem) + 1] != null ? mensagens[mensagens.indexOf(mensagem) + 1].nomeAutor != mensagem.nomeAutor : false}
                  usuarioAtual={mensagem.autorId == 0}
                />
              );
            })}
          </Flex>

          <Flex align="center" justify="center">
            <Input
              prefix={<BotaoAnexo clickFunction={() => alert("Você inseriu um anexo!")} />}
              placeholder="Digite sua mensagem..."
              className={style.mensagemInput}
              onChange={e => setMensagem(e.target.value)}
              value={mensagem}
              onPressEnter={enviarMensagem}
              suffix={<BotaoEnviar clickFunction={enviarMensagem} />}
            />
          </Flex>
        </Flex>

      </Col>
    </Row>
  );
};
