import Model from "../model.js";
import View from "./table.view.js";


const model = new Model();
const view = new View(model.data);

view.elements.productSelect.addEventListener('change', function(event) {
    model.changeStatus(event.target.value, model.status.processFilter);
    view.clearTabeleUser();
    filterItems();
});

view.elements.topStatusBarItems.forEach((item) => {
    item.addEventListener('click', processFilter);
});

view.elements.leftPanelsBtns.forEach((item) => {
    item.addEventListener('click', processFilter);
});

view.elements.tBody.addEventListener('click', function(event) {
    if(event.target.hasAttribute('data-edit')) {
        let id = event.target.closest('.tbody__item').id;
        model.saveStorageIdEl(id);
    }
});

function filterItems() {
    view.renderUsersElements(model.data, model.status.typeFilter, model.status.processFilter);
}

function processFilter() {
    model.changeStatus(model.status.typeFilter, this.dataset.value);
    view.addActiveCls(model.status.processFilter);
    view.clearTabeleUser();
    filterItems();
}