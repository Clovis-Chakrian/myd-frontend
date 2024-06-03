/* eslint-disable react/prop-types */
import { Button } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import style from './BotaoAnexo.module.css';

export const BotaoAnexo = ({ clickFunction }) => {
  return (
    <Button
      shape='circle'
      className={style.enviarAnexoBotao}
      icon={<PlusOutlined />}
      onClick={clickFunction}
    />
  )
}