/* eslint-disable react/prop-types */
import { Avatar, Flex, Typography } from "antd";
import style from './Mensagem.module.css';

export const Mensagem = ({ nomeAutor, conteudo, hora, fotoPerfil, mostrarFotoPerfil, mostrarNomeAutor, mostrarHora, ultimaMensagemSeguida }) => {
  return (
    <Flex className={style.mensagemContainer} justify="center" vertical>
      <Flex className={[style.conteudoMensagem, ultimaMensagemSeguida && style.removeBorderRadius]} align="center" gap={8}>
        {mostrarFotoPerfil && <Avatar src={fotoPerfil}></Avatar>}
        <Flex vertical>
          {mostrarNomeAutor && <Typography.Text className={style.mensagemAutor}>{nomeAutor}</Typography.Text>}
          <Typography.Text className={style.mensagem}>{conteudo}</Typography.Text>
        </Flex>
      </Flex>

      {mostrarHora && <Typography.Text type="secondary">{hora}</Typography.Text>}
    </Flex>
  );
}