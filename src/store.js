import { makeAutoObservable } from "mobx"

const STORE_KEY = 'STORE_KEY';

class Store {
    _data = []
    activeItemIndex = 1

    constructor() {
        makeAutoObservable(this)
        try {// если вдруг в стораже лежит кривая строка то мы отловим ошибку
            this._data = JSON.parse(localStorage.getItem(STORE_KEY)) || []
        } catch (e) { }
    }
    get data() { return this._data }
    set data(data) {
        localStorage.setItem(STORE_KEY, JSON.stringify(data)) //получение заметок 
        this._data = data 
    }
    updateActiveItem(item){ //редактирование заметок
        const newItems = [...this.data]
        console.log('updateActiveItem', item)
        if (this.data[this.activeItemIndex]){
            this.data[this.activeItemIndex] = item
        }
    }
    addItem(note) { //добавление заметок
        const newNotes = [...[note], ...this.data] 
        
        this.activeItemIndex = 0
        this.data = newNotes
        console.log('addItem newNotes', newNotes)
        localStorage.setItem(STORE_KEY, JSON.stringify(newNotes))
    }
    getActiveItem() { return this.data.find((item, index) => index === this.activeItemIndex) }
    removeItem() { this.data = this.data.filter((item, index) => index !== this.activeItemIndex) }
}
const store = new Store();
export default store;