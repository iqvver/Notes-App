const STORE_KEY = 'STORE_KEY';

class Store {
    getItems() {
        let data = localStorage.getItem(STORE_KEY);
        data = JSON.parse(data) || [];
        return data;
    }

    addItem(note) {
        let data = this.getItems();
        data.push(note);
        localStorage.setItem(STORE_KEY, JSON.stringify(data));
    }
    removeItem() {
        let idx = this.getItems();
        localStorage.removeItem(idx);

    }
}
let instance = new Store();
export default instance;