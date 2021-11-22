import branding from './../components/ui/branding';
import todoList from './../components/ui/todoList';
import todoTemplate from './../components/templates/todoItem';
import appBar from './../components/ui/appBar';
import { getStore } from './../redux/store';
import Router from './../routes/router';
import editButton from '../components/ui/buttons/editButton';

const toDoPage = function () {
	const todoData = getStore();

	function cleanUp() {
		const todos = toDoContent.querySelectorAll('li');
		todos.forEach((todo) => {
			todo.removeEventListener('click', onDeleteTodo);
			todo.removeEventListener('click', onEditTodo);
			toDoContent
				.querySelector('.add-btn')
				.removeEventListener('click', onAddTodo);
		});
	}

	function onDeleteTodo(e) {
		const todoId = e.currentTarget.parentElement.parentElement.dataset.key;
		const todoItem = getStore().filter((todo) => todo.id === todoId);
		cleanUp();
		Router('/delete', todoItem[0]);
	}

	setTimeout(addButtonListener, 2000);

	function addButtonListener() {
		const addButton = document.querySelector('.add-btn');
		addButton.addEventListener('click', onAddTodo);

		function onAddTodo(e) {
			cleanUp();
			Router('/add');
		}
	}

	function onEditTodo(e) {
		const todoId = e.currentTarget.parentElement.parentElement.dataset.key;
		const todoItem = getStore().filter((todo) => todo.id === todoId);
		cleanUp();
		Router('/edit', todoItem[0]);
	}

	const toDoContent = document.createElement('div');
	const brand = branding();
	const listContainer = todoList('ui-list');

	setTimeout(render, 1000);

	function render() {
		if (todoData !== null) {
			const elements = todoData.map((item) => {
				index = 0;
				return todoTemplate(item);
			});

			toDoContent.append(brand);
			toDoContent.append(listContainer);
			listContainer.append(elements[index]);
			toDoContent.append(appBar());
			console.log(listContainer);
			console.log(elements);

			elements.forEach((item) => {
				item.querySelector('#delete').addEventListener('click', onDeleteTodo);
				item.querySelector('#edit').addEventListener('click', onEditTodo);
				listContainer.append(item);
			});
		}
	}

	return toDoContent;
};

export default toDoPage;
