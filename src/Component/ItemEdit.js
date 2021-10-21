import React, { Component } from 'react'
import './Note.css'
import NewNote from './NewNote'
import store from '../store'
import { observer } from "mobx-react-lite"

const ItemEdit = ({ store }) => {
    const activeItem = store.getActiveItem() || { title: '', text: '' }
    const handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        store.addItem({ title: '', text: '' })
        store.updateActiveItem({ title: '', text: '' })
        store.activeItemIndex = 0
    }
    // Render
    return (
        <div>
            <NewNote onClick={handleClick} />
            <div className='item_edit'>
                <div className='item_in'>
                    <input autoFocus={true}
                        type='text'
                        placeholder='Заголовок'
                        value={activeItem.title}
                        onChange={e => store.updateActiveItem({ ...activeItem, title: e.target.value })}
                    />
                </div>
                <div className='item_area'>
                    <textarea
                        value={activeItem.text}
                        placeholder='TEXT'
                        onChange={e => store.updateActiveItem({ ...activeItem, text: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default observer(ItemEdit)