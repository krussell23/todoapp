import makeElement from "./../../utils/makeElement";

const errorMsg = function (
  errorCode = "404",
  errorMsg = "You can not take te road less traveled here !!!",
  className = "ui-error-msg"
) {
  const template = `    
    <p class="${className}"><span>Error ${errorCode}:</span> ${errorMsg}</p>
    `;
  const element = makeElement(template);

  return element;
};

export default errorMsg;
