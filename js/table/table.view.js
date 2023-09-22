export default class View {
    constructor(users) {
        users.forEach((user) => {
            this.renderHTML(user);
        })
    }

    elements = {
        tableList: document.querySelector('#tbody'),
        productSelect: document.querySelector('#productSelect')
    }

    renderHTML(usersObj) {

        const cssStatus = usersObj.status === 'new' ? 'danger' : '';

        const taskHTML = `<tr>
            <th scope="row">${usersObj.id}</th>
            <td>${usersObj.date}</td>
            <td>${usersObj.product}</td>
            <td>${usersObj.name}</td>
            <td>${usersObj.email}</td>
            <td>${usersObj.phone}</td>
            <td>
                <div class="badge badge-pill badge-${cssStatus}">Новый</div>
            </td>
            <td>
                <a href="edit.html">Редактировать</a>
            </td>
        </tr>`;

        this.elements.tableList.insertAdjacentHTML('beforeend', taskHTML);
    }

    clearTabeleUser() {
        this.elements.tableList.innerHTML = '';
    }

    renderFilterTasks(type, data) {
        data.forEach((user) => {
            if(user.product === type) {
                this.renderHTML(user);
            }else if(type === 'Все продукты') {
                this.renderHTML(user);
            }
        })
    }
}