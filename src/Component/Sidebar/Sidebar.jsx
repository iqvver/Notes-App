import React, { useState } from 'react'
import ItemEdit from './../ItemEdit'
import { Button, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { makeAutoObservable } from 'mobx'
import { observer } from "mobx-react-lite"

const { Header, Sider, Content } = Layout;

// Читаем про функциональный компонент так иногда проще и короче
const SideBar = (props) => {
    const { store } = props
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const submit = () => { store.addNote({ title, text }) }
    const display = (idx) => { 
        const note = store.findNote(idx) 
        if (note){
            setTitle(note.title)
            setText(note.text)
        }
    }

    return(
        <>
            {/* Читаем про HTML теги aside, main*/}
            <aside>
                {store.notes.map((n, idx) => <li onClick={() => display(idx)}>
                    <span>{n.title}</span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()// Что бы клик не считался на <li а только на <button https://learn.javascript.ru/bubbling-and-capturing
                            store.removeNote(idx)
                        }}
                    >x</button>
                </li>)}
            </aside>
            <main>
                <input 
                    placeholder="title"
                    onChange={(e) => { setTitle(e.target.value) }} 
                    value={title} 
                />
                <textarea
                    placeholder="text"
                    onChange={(e) => { setText(e.target.value) }} 
                    value={text} 
                />
                <button onClick={submit}>Отправить</button>
            </main>
        </>
    )
    
}

export default observer(SideBar) 