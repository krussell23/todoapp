import branding from "./../components/ui/branding";
import { addFormTemplate } from "./../components/templates/crudForm";
import button from "./../components/ui/buttons/button";
import Router from "./../routes/router";
import reducer from "./../redux/reducers";
import { generateSingleKey } from "./../utils/key";

const addButton = button("add todo");
addButton.setAttribute("form", "crudform");
addButton.setAttribute("type", "submit");

const cancelButton = button("cancel");


const addPage = function(props){    
    const brand = branding()
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('crud-controls')    
    const addContent = document.createElement('div')
    const form = addFormTemplate("Add Todo Item")
    form.querySelector('#todoId').value = generateSingleKey()
    let error = form.querySelector('div.error')


 
        function validateFormFilled() {
            let category = form.querySelector('#category').value
            let title = form.querySelector('#title').value
            let startDate = form.querySelector('#startDate').value
            let startTime = form.querySelector('#startTime').value
            let endDate = form.querySelector('#endDate').value
            let endTime = form.querySelector('#endTime').value
    

            if(category === '' || title.trim() === '' || startDate.trim() === '' || startTime.trim() === '' || endDate.trim() === '' || endTime.trim() === ''){
                if (!error.hasChildNodes()) {
                    error.appendChild(document.createTextNode('Please fill out all required fields.'));    
                } 
            }
            else {
                if(error.hasChildNodes()){
                    error.removeChild(error.firstChild)
                }
            }
        }


    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelAdd)
        addButton.removeEventListener('click', onAddTodo)
    }


    function onCancelAdd (e) {
        cleanUp()
        Router('/todo')
    }


    function onAddTodo (e) {
        e.preventDefault()

        validateFormFilled()


        if(!error.hasChildNodes()){

            const newTodo = {
                id: form.querySelector('#todoId').value,
                category: form.querySelector('#category').value,
                title: form.querySelector('#title').value,
                isComplete: form.querySelector('#completeStatus').checked,
                startDate: form.querySelector('#startDate').value,
                startTime: form.querySelector('#startTime').value,
                endDate: form.querySelector('#endDate').value,
                endTime: form.querySelector('#endTime').value
            }


            const action = {
                type:"add",
                payload: newTodo,
                cb:()=> Router('/todo')
            }
            reducer(action)
            cleanUp()
        }
    }


    buttonContainer.append(cancelButton, addButton)
    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddTodo)
    addContent.append(brand)
    addContent.append(form)
    addContent.append(buttonContainer)

    return addContent
}

export default addPage