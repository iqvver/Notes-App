import React, { Component } from 'react'
import ItemEdit from './../ItemEdit'
import store from './../../store'
import { Button, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class Card extends Component {
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
    deleteNote = (id) => {
        let items = store.getItems();
        this.removeItem(id);
    }
    handleDelete(id) {
        let items = this.getItems();
        localStorage.removeItem(id);
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        {items.map((item, id, key) => (<Menu.Item key={id} item={item}
                            icon={<UserOutlined />}>
                            {id}
                            <Button onClick={() => {
                                this.handleDelete(item.key)
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
