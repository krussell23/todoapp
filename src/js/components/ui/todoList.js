import makeElement from './../../utils/makeElement';

const todoList = function (className = 'ui-list') {
	const template = `
        <ul class="${className}" id="todos"></ul>
    `;

	const element = makeElement(template);

	return element;
};

export default todoList;
