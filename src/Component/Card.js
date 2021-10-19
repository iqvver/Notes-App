import React, { Component } from 'react'
import Item from '../Item'
import ItemEdit from './ItemEdit'
import store from '../store'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],    
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
    render() {
        let { items } = this.state;
        return (
            
            <div className='card_ctrl'>
                <ItemEdit onChange={this.getData} />
                <div className='card'>
                    {items.map((item, id) => (
                        <Item key={id} item={item} />
                    ))}
                </div>
            </div>
            

        )
    }
}
