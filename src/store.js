import { makeAutoObservable } from "mobx"

const STORE_KEY = 'STORE_KEY';

class Store {
    _notes = []// Фейковое поле класса  для хранения 

    constructor(){
        makeAutoObservable(this)
        try{// если вдруг в стораже лежит кривая строка то мы отловим ошибку
            this._notes = JSON.parse(localStorage.getItem(STORE_KEY)) || []
        } catch(e){  }  
    }

    // https://coryrylan.com/blog/javascript-es6-class-syntax#get-and-set
    get notes() { return this._notes }
    set notes(notes) {
        localStorage.setItem(STORE_KEY, JSON.stringify(notes)) 
        this._notes = notes 
    }

    findNote(idx) {
        return this.notes.find((n, index) => index === idx)
    }

    addNote(note) {
        const newNotes = [...[note], ...this.notes] // Запусти в консоли хрома: [...["первыйнах"], ...["второй", "третий"]]
        this.notes = newNotes
        localStorage.setItem(STORE_KEY, JSON.stringify(newNotes))
    }

    removeNote(idx) {
        this.notes = this.notes.filter((item, index) => index !== idx) // Весь массив кроме удаляющегося индека
    }
}

const store = new Store()

export default store