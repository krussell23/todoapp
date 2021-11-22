import makeElement from "./../../utils/makeElement";

const header = function (title = "uiHeader", className = "ui-header") {
  const template = `<h1 class="${className}">${title}</h1>`;
  const element = makeElement(template);

  return element;
};

export default header;
