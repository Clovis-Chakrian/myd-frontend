import { Avatar, Flex, Typography, Badge } from "antd";
import style from './ContatoCard.module.css'

export const CardContato = () => {
  return (
    <Flex className={style.cardContainer}>
      <Flex align="center" gap={10}>
        <Flex>
          <Avatar size="large" src="http://localhost:5173/src/pages/SobreNos/membros/Rodrigo.jpg" />
        </Flex>

        <Flex vertical className={style.conteudoContainer}>
          <Typography.Title className={style.squadNome} level={5}>Nome</Typography.Title>
          <Typography.Text>Última mensagem</Typography.Text>
        </Flex>

      </Flex>

      <Flex className={style.tempoContainer} vertical align="center" justify="space-between">
        <Typography.Text type="secondary">4min</Typography.Text>
        <Badge count={1} color="#F2B66D">
        </Badge>
      </Flex>
    </Flex>
  );
}