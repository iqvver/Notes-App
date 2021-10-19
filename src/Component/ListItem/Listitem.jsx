import React, { Component } from 'react'
import { Layout } from 'antd';
import Card from '../Card';

const { Content } = Layout;

export default class Listitem extends Component {
    render() {
        return (
            <div>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }} >

                    <Card />
                    
                </Content>
            </div>
        )
    }
}
