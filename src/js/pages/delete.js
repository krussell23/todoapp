import branding from "./../components/ui/branding";
import button from "./../components/ui/buttons/button";
import todoList from "./../components/ui/todoList";
import todoTemplate from "./../components/templates/todoItem";
import Router from "./../routes/router";
import reducer from "./../redux/reducers";
import { getStore } from "./../redux/store";


const cancelButton = button("cancel");
const deleteButton = button("delete");

const deletePage = function(props){
    //creating containers for the page and setting up needed elements
    const deleteContent = document.createElement('div')
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('crud-controls')
    const brand = branding()
    const listContainer = todoList('crud-list');
    const todoItem = todoTemplate(props)
    todoItem.removeChild(todoItem.lastElementChild)


    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelDelete)
        deleteButton.removeEventListener('click', onDeleteTodo)
    }


    function onCancelDelete (e) {
        cleanUp()
        Router('/todo')
    }

    function onDeleteTodo (e) {
        if(props !== null){
            const removeTodo = props
            const index = getStore().findIndex(todo => todo.id === removeTodo.id)
            const action = {
                type: "delete",
                payload: {index},
                cb:()=> Router('/todo')
            }
            reducer(action)
            cleanUp()
        }
    }


    buttonContainer.append(cancelButton, deleteButton)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteButton.addEventListener('click', onDeleteTodo)
    listContainer.append(todoItem);
    deleteContent.append(brand);
    deleteContent.append(listContainer);
    deleteContent.append(buttonContainer);

    return deleteContent;
}

export default deletePage