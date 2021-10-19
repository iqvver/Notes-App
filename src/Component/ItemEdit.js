import React, { Component } from 'react'
import './Note.css'
import NewNote from './NewNote'
import store from '../store'

export default class ItemEdit extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            isEdit: false,
            title: '',
            text: '',
        }

    }
    componentDidMount() {
        document.addEventListener('click', this.handleGlobalClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleGlobalClick);
    }
    handleGlobalClick = (e) => {
        if (this.ref && this.ref.current && this.ref.current.contains(e.target)) {
            this.startEdit();
        } else {
            this.stopEdit();
        }
    }
    startEdit = () => {
        this.setState({ isEdit: true });
    }
    stopEdit = () => {
        let { onChange } = this.props;
        let { title, text } = this.state;
        if (title || text) {
            store.addItem({
                title: title,
                text: text
            });
            onChange && onChange();
        }
        this.setState({ isEdit: false, title: '', text: '' });
    }
    handleClick = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        this.startEdit();
    }
    renderEdit() {
        let { isEdit } = this.state;
        if (isEdit) {
            return (
                <div className='item_edit' ref={this.ref}>
                    <div className='item_in'>
                        <input type='text'
                            placeholder='Заголовок'
                            onChange={e => this.handleChange(e, 'title')}
                        />
                    </div>

                    <div className='item_area'>
                        <textarea
                            placeholder='TEXT'
                            onChange={e => this.handleChange(e, 'text')}
                        />
                    </div>
                </div>
            );
        }
        return null;
    }
    handleChange = (e, field) => {
        this.setState({
            [field]: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <NewNote onClick={this.handleClick} />
                {this.renderEdit()}
            </div>
        )

    }
}
