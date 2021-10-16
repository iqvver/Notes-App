import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
import { RocketOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined, } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

export default class Ccomponent extends Component {
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

    render() {

        return (
            <div>
                <form >
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Нажми меня!</button>
                </form>
                <Menu>
                    {this.state.items.map((item, index) => (
                        <Menu.Item key={index + item.name}>
                            {`${item.name}`}
                            <button onClick={() => {
                                this.handleDelete(item.id)
                            }}>X</button>
                        </Menu.Item>
                    ))}
                </Menu>

                <h5>{`Я написал: ${this.state.input}`}</h5>
                
                <h1>Я написал: {this.state.input}</h1>
            </div>
        );
    }
}
