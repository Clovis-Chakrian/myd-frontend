/* eslint-disable react/prop-types */
import { Avatar, Flex, Typography, Badge } from "antd";
import style from './ContatoCard.module.css'

export const CardContato = ({ contatoNome, ultimaMensagem, ultimaMensagemHora }) => {
  return (
    <Flex className={style.cardContainer}>
      <Flex align="center" gap={10}>
        <Flex>
          <Avatar size="large" src="http://localhost:5173/src/pages/SobreNos/membros/Rodrigo.jpg" />
        </Flex>

        <Flex vertical className={style.conteudoContainer}>
          <Typography.Title className={style.squadNome} level={5}>{contatoNome}</Typography.Title>
          <Typography.Text>{ultimaMensagem}</Typography.Text>
        </Flex>

      </Flex>

      <Flex className={style.tempoContainer} vertical align="center" justify="space-between">
        <Typography.Text type="secondary">{ultimaMensagemHora}</Typography.Text>
        <Badge count={1} color="#F2B66D">
        </Badge>
      </Flex>
    </Flex>
  );
}