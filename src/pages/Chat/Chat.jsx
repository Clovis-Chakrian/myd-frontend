import { AppLayout } from "../../components/AppLayout/AppLayout";
import { Col, Flex, Input, Layout, Row, Avatar, Typography, Badge } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { CardContato } from "./CardContato/ContatoCard";
import style from "./Chat.module.css";

export const Chat = () => {
  return (
    <AppLayout>
      <Row>
        <Col span={6}>
          <Input placeholder="Busque por um contato..." />

          <Flex vertical gap={20}>
            <CardContato />
            <CardContato />
            <CardContato />
            <CardContato />
            <CardContato />
          </Flex>
        </Col>

        <Col span={18}>
          <Flex className="conversa" vertical>
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
            <Flex className="mensagens" vertical>
              <div>
                <p>mensagem</p>
                <p>Imagem possivelmente</p>
              </div>
            </Flex>

            <Flex className="form-mensagem">

            </Flex>
          </Flex>

        </Col>
      </Row>
    </AppLayout>
  );
};
