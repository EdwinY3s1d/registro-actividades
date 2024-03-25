import React from "react";
import { Button, Flex, Tooltip, Layout, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function Home() {   
    return (
        <Layout>
            <Header style={{ color: 'white', textAlign: 'center' }}>
                <Title level={2}>Welcome to Our Website</Title>
            </Header>
            <Content style={{ padding: '50px', textAlign: 'center' }}>
                <Title level={4}>Nuestra pagina</Title>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Website Footer</Footer>
        </Layout>
    );
}

export default Home;