import React, { Component } from 'react'
import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

export default class NewNote extends Component {
    handleClick = (e) => {
        let { onClick } = this.props;
        onClick && onClick(e);
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <Button type="primary" size='small'><SaveOutlined /></Button>
            </div>
        )
    }
}
