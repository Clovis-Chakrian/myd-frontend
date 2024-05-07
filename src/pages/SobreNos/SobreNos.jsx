import { AppLayout } from "../../components/AppLayout/AppLayout";
import React from 'react';
import { Space, Typography, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import AppCard from './AppCard';
import cecilia from './membros/cecila.jpg';
import Clovis from './membros/clovis.png';
import rodrigo from './membros/Rodrigo.jpg';
import victor from './membros/victor.jpg';
import gustavo from './membros/Gustavo.png';
import anninha from './membros/Beatryz.jpg'
const { Text } = Typography;

export const SobreNos = () => {
    const users = [
        {
            nome: "Ana Cecília",
            img: cecilia,
            github: "https://github.com/ceciliasimoes",
            linkedin: 'https://www.linkedin.com/in/ana-cecilia-simoes-chalegre/'
        },
        {
            nome: "Anna Beatryz",
            img: anninha,
            github: "https://github.com/AgedAnna",
            linkedin: 'https://www.linkedin.com/in/anna-beatryz-0508a4233/'
        },
        {
            nome: "Clóvis Chakrian",
            img: Clovis,
            github: "https://github.com/Clovis-Chakrian",
            linkedin: 'https://www.linkedin.com/in/clovis-chakrian/'
        },
        {
            nome: "Gustavo Felipe",
            img: gustavo,
            github: "https://github.com/GustavoFelips",
            linkedin: 'https://www.linkedin.com/in/gustavo-felipe-1382a426b/'
        },
        {
            nome: "Rodrigo Miranda",
            img: rodrigo,
            github: "https://github.com/rodrigomirandaa",
            linkedin: 'https://www.linkedin.com/in/rodrigomirandaa/'
        },
        {
            nome: "Victor Costa",
            img: victor,
            github: "https://github.com/victorcosta213",
            linkedin: 'https://www.linkedin.com/in/victor-costa-14295a1b1/'
        }];

    return (
        <AppLayout>
            <h1>Sobre Nós</h1>
            <Row justify="center" gutter={[16, 16]}>
                {users.map((user, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <AppCard user={user} />
                    </Col>
                ))}
            </Row>
        </AppLayout>
    )
}
