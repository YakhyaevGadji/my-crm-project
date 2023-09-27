import Model from "../model.js";
import View from "./form.view.js";

const model = new Model();
const view = new View();

view.elements.form.addEventListener('submit', setDateInInputs);

function setDateInInputs(event) {
    event.preventDefault();

    model.addUserInDate(view.getInputs());
    testData.init();
}