import React from 'react';
import { Layout,Menu,Icon } from 'antd';
import style from './box.css';

const { Header,Footer,Sider,Content } = Layout;
class BasicLayout extends React.Component{
    title=(<span><Icon type='dashboard' /><span>Dashboard</span></span>);
    render(){
        return(
            <Layout>
                <Sider width={256} className={style.sider}>
                    <div className={style.sidediv}></div>
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Icon type='pie-chart' />
                            <span>HelloWorld</span>
                        </Menu.Item>
                        <Menu.SubMenu key='sub1' title={this.title}>
                            <Menu.Item key='2'>分析页</Menu.Item>
                            <Menu.Item key='3'>监控页</Menu.Item>
                            <Menu.Item key='4'>工作台</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={style.header}>Header</Header>
                    <Content className={style.content}>
                        <div className={style.inner}>{this.props.children}</div>
                    </Content>
                    <Footer className={style.footer}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;