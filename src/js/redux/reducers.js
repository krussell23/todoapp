import {getStore, updateStore} from './store'

let store;
let newStore;
let index;

function reducer (action){
// jim function from deme delete, add,edit
    switch(action.type){
        case "delete":
            store  = getStore()
            index = action.payload.index;         
            newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb( )
            return "remove todo";
        case "edit":
            store  = getStore()
            index = getStore().findIndex(todo => todo.id === action.payload.id)
            newStore = [...store.slice(0,index), action.payload, ...store.slice(index +1)]
            updateStore(newStore)
            action.cb()
            return "edit todo";
        case "add":
            store = getStore();
            newStore = [...store, action.payload]
            updateStore(newStore)
            action.cb()
            return "add todo";
        default: return getStore()
    }
}

export default reducer