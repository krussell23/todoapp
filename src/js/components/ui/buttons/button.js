import makeElement from "../../../utils/makeElement";

const button = function(label="ui-button"){
    const template = `<button class="ui-button">${label}</button>`
    const element = makeElement(template);
    return element
}

export default button