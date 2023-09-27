export default class View {
    constructor(users) {
        users.forEach((user) => {
            this.renderHTML(user);
        })
    }

    elements = {
        tableList: document.querySelector('#tbody'),
        productSelect: document.querySelector('#productSelect'),
        topStatusBarItems: document.querySelectorAll(".btn-light"),
        leftPanelsBtns: document.querySelectorAll(".left-panel__btn"),
        tBody: document.querySelector("#tbody")
    }

    renderHTML(usersObj) {
        const status = this.getStatus(usersObj.status);
        const cssStatus = usersObj.status === 'new' ? 'danger' : '';

        const taskHTML = `<tr class="tbody__item" data-type="${usersObj.product.type}" id="${usersObj.id}">
            <th scope="row">${usersObj.id}</th>
            <td>${usersObj.date}</td>
            <td>${usersObj.product.value}</td>
            <td>${usersObj.name}</td>
            <td>${usersObj.email}</td>
            <td>${usersObj.phone}</td>
            <td>
                <div class="badge badge-pill ${status.clsName}">${status.value}</div>
            </td>
            <td>
                <a href="edit.html" data-edit>Редактировать</a>
            </td>
        </tr>`;

        this.elements.tableList.insertAdjacentHTML('beforeend', taskHTML);
    }

    getStatus(status) {
        const statusObj = {
            new: { clsName: "badge-danger", value: "Новый" },
            inwork: { clsName: "badge-warning", value: "В работе" },
            complete: { clsName: "badge-success", value: "Завершенный" },
        };
      
        return {
            clsName: statusObj[status].clsName,
            value: statusObj[status].value,
        };
    }

    addActiveCls(process) {
        this.elements.leftPanelsBtns.forEach((item) => {
            item.classList.remove("active");
    
            if (item.dataset.value === process) {
                item.classList.add("active");
            }
        });
    }

    renderUsersElements(userDates, type = "all", process = "all") {

        console.log(userDates);
        console.log(type);
        console.log(process);
        
        userDates.forEach((item) => {
          if (process === "all" && type === "all") {
                this.renderHTML(item);
                console.log(type, process);
          } else if (process === "all" && type != "all") {
                if (type === item.product.type) {
                    this.renderHTML(item);
                }
          } else if (type === "all" && process != "all") {
                if (process === item.status) {
                    this.renderHTML(item);
                }
          } else if (process === item.status && type === item.product.type) {
                this.renderHTML(item);
          } 
          
        });
    }

    clearTabeleUser() {
        this.elements.tableList.innerHTML = '';
    }

    
}