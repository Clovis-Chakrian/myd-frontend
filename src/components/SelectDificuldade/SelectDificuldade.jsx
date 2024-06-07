import styles from './SelectDifculdade.module.css'
import { useState } from 'react';
import { Radio, ConfigProvider } from 'antd';

export const SelectDifuldade = () =>{

    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

  const options = [
    'Fácil',
    'Médio',
    'Difícil'
  ]

  return (
    <ConfigProvider
    theme={{
      token: {
        colorBgContainer: '#ffffff', 
        colorBorder: '#f2b66d', 
        colorPrimary: '#f2b66d', 
        radioSize: 250,
      },
    }}
  >
    <Radio.Group onChange={onChange} value={value} className={styles.select} >
      <Radio className={styles.radio} value={1}>{options[0]}</Radio>
      <Radio className={styles.radio} value={2}>{options[1]}</Radio>
      <Radio className={styles.radio} value={3}>{options[2]}</Radio>
    </Radio.Group>
    </ConfigProvider>
  );
}