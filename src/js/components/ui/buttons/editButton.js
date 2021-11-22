import makeElement from '../../../utils/makeElement';

import editIcon from './../../icons/editIcon';

const editButton = function (
	className = 'ui-button',
	title = 'edit',
	id = 'edit'
) {
	const icon = editIcon();
	const template = `<button class="${className}">${icon}${title}</button>`;
	const element = makeElement(template);
	return element;
};
S;
export default editButton;
