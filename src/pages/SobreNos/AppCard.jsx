import React from 'react';
import { Card, Avatar, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Meta } = Card;

const AppCard = ({ user }) => (
    <Card style={{ width: 300 }}>
        <Meta
            avatar={<Avatar src={user.img} />}
            title={user.nome}
            description={
                <Space direction="vertical">
                    <a href={user.github} target="_blank" rel="noopener noreferrer">
                        <GithubOutlined /> GitHub
                    </a>
                    <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined /> LinkedIn
                    </a>
                </Space>
            }
        />
    </Card>
);

export default AppCard;
