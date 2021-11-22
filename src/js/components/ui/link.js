import makeElement from "./../../utils/makeElement";
import Router from "./../../routes/router";

//prevent default anchor tag behaviour
const onRequestPage = function (e) {
  e.preventDefault();
  Router(e.currentTarget.dataset.path);
  return false;
};

const link = function (title = "uiLink", path = "/", className = "ui-link") {
  const template = `<a class="${className}" href="${path}" data-path="${path}">${title}</a>`;
  const element = makeElement(template);
  element.addEventListener("click", onRequestPage);

  return element;
};

export default link;
