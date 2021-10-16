import React, { Component } from 'react'
import './../../App.css';
import { Layout, Menu, Button } from 'antd';
import { RocketOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined, } from '@ant-design/icons';
import Listitem from '../ListItem/Listitem';

const { Header, Sider } = Layout;

export default class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.init = {
            input: "",
            items: []
        };

        this.state = this.init
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            ...this.state,
            input: this.state.input,
            items: [...this.state.items, {
                name: this.state.input,
                date: new Date(),
                id: this.state.items.length
            }]
        });
    }

    reset() { this.setState(this.init) }

    handleDelete(deletedId) {
        let newItems = [...this.state.items]
        let idx = newItems.findIndex(item => deletedId === item.id)

        if (idx > -1) {
            newItems.splice(idx, 1)
        }

        this.setState({ ...this.state, items: newItems })
    }

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
                <Sider>
                    <Button type="primary" onClick={this.handleSubmit}>New Node</Button>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        {this.state.items.map((item, index) => (
                            <Menu.Item key={index + item.name}>
                                {`${item.name}`}
                                <Button type="primary"
                                    icon={<PoweroffOutlined />} onClick={() => {
                                        this.handleDelete(item.id)
                                    }}></Button>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        
                            <h5 defaultSelectedKeys={['']} >Name:  {this.state.input}</h5>
                        
                    </Header>

                    <Listitem />

                </Layout>
            </Layout>
        )
    }
}
