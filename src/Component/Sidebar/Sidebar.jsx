import React, { Component, useState  } from 'react'
import ReactDOM from 'react-dom';
import ItemEdit from './../ItemEdit'
import store from './../../store'
import { makeAutoObservable } from 'mobx'
import { observer } from "mobx-react-lite"
import { Button, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class Sidebar extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isEdit: false,
            title: '',
            text: '',
        }
    }
    getData = () => {
        let items = store.getItems();
        this.setState({
            items: items
        });
    }
    componentDidMount() {
        this.getData();
    }
    handleChange = (e, field) => {
        this.setState({
            [field]: e.target.value,
        });
    }
    
    render() {
        let { items } = this.state;
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>

                        {items.map((item, idx) => (<Menu.Item key={idx} item={item}
                            icon={<UserOutlined />}>
                            {item.title}
                            <Button onClick={() => {
                                store.removeItem(idx);
                                onsubmit = {}
                            }}>X</Button>
                        </Menu.Item>))}

                    </Menu>
                </Sider>
                <Layout className="site-layout">

                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <ItemEdit onChange={this.getData} />
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
