import { makeAutoObservable } from "mobx"

const STORE_KEY = 'STORE_KEY';

class Store {
    _data = []
    constructor() {
        makeAutoObservable(this)
        try {// если вдруг в стораже лежит кривая строка то мы отловим ошибку
            this._data = JSON.parse(localStorage.getItem(STORE_KEY)) || []
        } catch (e) { }
    }
    get data() { return this._data }
    set data(data) {
        localStorage.setItem(STORE_KEY, JSON.stringify(data)) 
        this._data = data 
    }
    getItems() {
        let data = localStorage.getItem(STORE_KEY);
        data = JSON.parse(data) || [];
        return data;
    }
    addItem(note) {
        const newNotes = [...[note], ...this.data] 
        this.data = newNotes
        localStorage.setItem(STORE_KEY, JSON.stringify(newNotes))
    }
    removeItem(idx) {
        this.data = this.data.filter((item, index) => index !== idx)
    }
}
const store = new Store();
export default store;