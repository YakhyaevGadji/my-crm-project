export default class Model {
    constructor() {
        this.status = {
            typeFilter: "all",
            processFilter: "all",
        };
        this.getToLocalstorage();
    }

    User = function(id, name, email, phone, product, status, date, time) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.phone = phone,
        this.product = product,
        this.status = status,
        this.date = date,
        this.time = time
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

    saveStorageIdEl(id) {
        localStorage.setItem('elementId', JSON.stringify(id));
    }

    getElementIdToStorage() {
        let id = JSON.parse(localStorage.getItem('elementId'));

        if(id) {
            return this.getElement(Number(id)).data;
        }
    }

    changeUser(userData) {
        const elementInfo = this.getElement(userData.id);
        const index = elementInfo.index;
    
        this.data.splice(index, 1, userData);
        this.saveToLocalstorage();
    }

    getElement(id) {
        return {
          data: this.data.find((el) => el.id === id),
          index: this.data.findIndex((el) => el.id === id),
        };
    }
    createDate() {
        let ndate = new Date(),
          day = ndate.getDate(),
          month = ndate.getMonth() + 1,
          year = ndate.getFullYear(),
          hours = ndate.getHours(),
          minutes = ndate.getMinutes(),
          seconds = ndate.getSeconds();
    
        const date = `${this.filterDate(day)}:${this.filterDate(month)}:${year}`;
        const time = `${this.filterDate(hours)}:${this.filterDate(
          minutes
        )}:${this.filterDate(seconds)}`;
        console.log(this.data);
        return {
          date: date,
          time: time,
        };
    }

    filterDate(date) {
        let localDate = date < 10 ? "0" + date : date;
        return localDate;
    }

    addUserInDate(viewElements) {
        const time = this.createDate().time;

        let newTask = new this.User(this.createId(), viewElements.name, viewElements.email, viewElements.number, viewElements.product, 'new', this.getData(), time);
        this.data.push(newTask);
        this.saveToLocalstorage();
    }

    changeStatus(type, process) {
        this.status.typeFilter = type;
        this.status.processFilter = process;
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