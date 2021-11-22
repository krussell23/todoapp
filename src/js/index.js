import Router from "./routes/router";
import dataFetcher from "./utils/dataFetcher";
import { createStore } from "./redux/store";
import keyGenerator from "./utils/key";

const onAppInit = async function(e){
    const app = document.querySelector('#app')
    let toDos = await dataFetcher('./data/todos.json')


    if(toDos[0].id === undefined) {
        toDos = [...keyGenerator(toDos)]
    }

    createStore(toDos)

    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)

