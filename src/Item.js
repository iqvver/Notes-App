import React, { Component } from 'react'
import './Component/Note.css'
import store from './store'

export default class Item extends Component {
    render() {
        console.log(this.props);
        let { item } = this.props;
        if (item) {
            let { text, title, id } = item;
            return (
                <div className='item'>
                    <p className='item_head'>{title}</p>
                    <p>{text}</p>
                    <button className='delete' onClick={() => {localStorage.removeItem(id)}}>x</button>
                </div>
            )
        }
        return null;
    }
}
