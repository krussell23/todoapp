import deleteButton from './../ui/buttons/deleteButton';
import editButton from './../ui/buttons/editButton';
import makeElement from './../../utils/makeElement';

import logo from './../icons/logo';

function selectIcon(category) {
	switch (category) {
		default:
			return logo();
	}
}
//pass the todo object into this method and extract only the properties we want.
const todoTemplate = function ({
	id,
	category,
	title,
	isComplete,
	endDate,
	endTime,
}) {
	const completeStatus = isComplete
		? "<p class='completed'>Completed</p>"
		: '<p>&zwnj;</p>';
	const template = `
    <li data-key="${id}" class="${category}">
        <div>
            <h2>${selectIcon(category)} ${title}</h2>
            <p><span>End Date:</span><br/>${endDate} @ ${endTime}</p>
            ${completeStatus}
        </div>
		<p><button class="edit-button" id="edit" data-key="${id}"> Edit </button></p>
        <p><button class="delete-button" id="delete" data-key="${id}"> Delete </button></p>
    </li>
    `;

	const element = makeElement(template);
	return element;
};

export default todoTemplate;
