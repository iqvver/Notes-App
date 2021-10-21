import React from 'react'
import ItemEdit from './../ItemEdit'
import Window from './Modal'
import NewNote from '../NewNote'
import { observer } from "mobx-react-lite"
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, RightOutlined, } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Sidebar = ({ store }) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        store.addItem({ title: '', text: '' })
        store.updateActiveItem({ title: '', text: '' })
        store.activeItemIndex = 0
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div>
                    <div className='newNoteButton'>
                        <NewNote onClick={handleClick} />
                    </div>
                    <div className='delButton'>
                        <Window store={store} />
                    </div>
                </div>
                <Menu className='menu' onSelect={({ item, key }) => { store.activeItemIndex = +key }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    {store.data.map((item, idx) => (<Menu.Item
                        key={idx}
                        item={item}
                        icon={<RightOutlined />}>
                        {item.title}
                    </Menu.Item>))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => { setCollapsed(!collapsed) },
                    })}
                </Header>
                <Content className="site-layout-background">
                    <ItemEdit store={store} />
                </Content>
            </Layout>
        </Layout>
    );
}

export default observer(Sidebar)