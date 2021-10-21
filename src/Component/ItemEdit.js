import './Note.css'
import { observer } from "mobx-react-lite"

const ItemEdit = ({ store }) => {
    const activeItem = store.getActiveItem() || { title: '', text: '' } //получения массива заметок

    return (
        <>
                {/*поле заголовок*/}
            <div className='item_in'>
                <input autoFocus={true}
                    type='text'
                    placeholder='Заголовок'
                    value={activeItem.title}
                    onChange={e => store.updateActiveItem({ ...activeItem, title: e.target.value })}
                />
            </div>
            {/*поле тела заметки*/}
            <div className='item_area'>
                <textarea
                    value={activeItem.text}
                    placeholder='Текст заметки'
                    onChange={e => store.updateActiveItem({ ...activeItem, text: e.target.value })}
                />
            </div>
        </>
    )
}

export default observer(ItemEdit)