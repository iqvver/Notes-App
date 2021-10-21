import React, { Component, useState } from 'react'
import ItemEdit from './../ItemEdit'
import store from './../../store'
import { makeAutoObservable } from 'mobx'
import Window from './Modal'
import { observer } from "mobx-react-lite"
import { Button, Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Sidebar = ({ store }) => {
    const [collapsed, setCollapsed] = React.useState(false)
    console.log('store.data', store.data)

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <div className='delButton'>
                    <Window store={store} />
                </div>
                <Menu onSelect={({ item, key }) => { store.activeItemIndex = +key }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {store.data.map((item, idx) => (<Menu.Item
                        key={idx}
                        item={item}
                        icon={<UserOutlined />}>
                        {item.title}
                    </Menu.Item>))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className='newNoteButton'>
                        <ItemEdit store={store} />
                    </div>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => { setCollapsed(!collapsed) },
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

export default observer(Sidebar)