/* eslint-disable react/prop-types */
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import style from './BotaoEnviar.module.css';

export const BotaoEnviar = ({ clickFunction }) => {
  return (
    <Button
      shape='circle'
      className={style.enviarMensagemBotao}
      icon={<SendOutlined />}
      onClick={clickFunction}
    />
  );
}