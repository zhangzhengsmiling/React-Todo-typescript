import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const LayoutA = (props: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ width: '100%', height: '80px', border: '1px solid purple', boxSizing: 'border-box', background: 'transparent' }}>
        this is header...
      </Header>
      <Layout style={{ height: 'calc(100vh - 120px)' }}>
        <Sider style={{ width: '80px', background: '#eeeeee', height: '100%', border: '1px solid orange', boxSizing: 'border-box' }}>
          this is sider...
        </Sider>
        <Content style={{ border: '1px solid green', boxSizing: 'border-box' }}>
          {renderRoutes(props.route.routes)}
        </Content>
      </Layout>
      <Footer style={{ width: '100%', height: '40px', border: '1px solid yellow', boxSizing: 'border-box', padding: 0 }}>
        this is footer...
      </Footer>
    </Layout>
  )
}

export default LayoutA;
