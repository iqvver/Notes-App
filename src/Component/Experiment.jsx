import React, { Component } from 'react'
import store from '../store'
import Item from '../Item';

export default class Experiment extends Component {
    render() {

        let items = store.getItems();


        return (
            <div>
        
                {
                    items.map(item => <Item item={item} />)
                }

            </div>
        )
    }
}
