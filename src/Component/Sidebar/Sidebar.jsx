import React, { Component } from 'react'
import './../../App.css';
import { Layout, Menu } from 'antd';
import { RocketOutlined, MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons';
import Listitem from '../ListItem/Listitem';

const { Header, Sider } = Layout;

export default class Sidebar extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<RocketOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<RocketOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<RocketOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Listitem />
                </Layout>
            </Layout>
        )
    }
}
