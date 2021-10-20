import React, { Component } from 'react'
import './Note.css'
import NewNote from './NewNote'
import store from '../store'
import { observer } from "mobx-react-lite"

const ItemEdit = ({ store }) => {
    const activeItem = store.getActiveItem() || { text: '', title: '' }
    const ref = React.useRef()
    const [isEdit, setIsEdit] = React.useState(false)
    const startEdit = () => {
        setIsEdit(true)
        store.updateActiveItem({ title: '', text: '' })
        store.activeItemIndex = 0
    }
    const handleGlobalClick = (e) => {
        if (ref && ref.current && ref.current.contains(e.target)) {
            startEdit();
        }
    }
    const handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        store.addItem({ title: '', text: '' })
        startEdit()
    }

    // componentDidMount
    React.useEffect(() => {
        document.addEventListener('click', handleGlobalClick)

        //componentWillUnmount
        return () => {
        document.removeEventListener('click', handleGlobalClick);
        }
    }, [])
    console.log('activeItem', activeItem)
    // Render
    return (
        <div>
            <NewNote onClick={handleClick} />
            <div className='item_edit' ref={ref}>
                <div className='item_in'>
                    <input type='text'
                        placeholder='Заголовок'
                        value={activeItem.title}
                        onChange={e => store.updateActiveItem({...activeItem, title: e.target.value })}
                    />
                </div>
                <div className='item_area'>
                    <textarea
                        value={activeItem.text}
                        placeholder='TEXT'
                        onChange={e => store.updateActiveItem({...activeItem, text: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default observer(ItemEdit)