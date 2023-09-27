import Model from "../model.js";
import View from "./edit.view.js";

const model = new Model();
const view = new View(model.getElementIdToStorage());

view.elements.form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newInfo = view.getElements();
    model.changeUser(newInfo)
});