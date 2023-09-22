export default class Model {
    constructor() {
        this.getToLocalstorage();
    }

    User = function(id, name, email, phone, product, status, date) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.phone = phone,
        this.product = product,
        this.status = status,
        this.date = date
    }

    getData() {
        let date = new Date();
        let newdate, dateMonthe;

        dateMonthe = date.getMonth() + 1;

        newdate = date.getDate() + '.' + (date.getMonth() < 10 ? '0' : '') + dateMonthe + '.' + date.getFullYear();

        return newdate;
    }

    createId() {
        const index = this.data.length;
        let id = 1
    
        if(index > 0) {
            id = this.data[index -1].id + 1
        }
        return id
    }

    addUserInDate(viewElements) {
        let selectEl = viewElements.select;
        let selectedValue = selectEl.options[selectEl.selectedIndex].textContent;
        let newTask = new this.User(this.createId(), viewElements.nameInput.value, viewElements.email.value, viewElements.phone.value, selectedValue, 'new', this.getData());

        this.data.push(newTask);
        this.saveToLocalstorage();
    }

    getToLocalstorage() {
        let localUsers = localStorage.getItem('users');
        if(localUsers) {
            this.data = JSON.parse(localUsers);
        }
    }

    saveToLocalstorage() {
        localStorage.setItem('users', JSON.stringify(this.data));
    }
   
    data = []
}