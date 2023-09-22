import Model from "../model.js";
import View from "./table.view.js";


const model = new Model();
const view = new View(model.data);

view.elements.productSelect.addEventListener('click', function() {
    let selectEl = view.elements.productSelect;
    let selectedValue = selectEl.options[selectEl.selectedIndex].textContent;

    view.clearTabeleUser();
    view.renderFilterTasks(selectedValue, model.data);
});