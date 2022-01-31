import { userActions } from "./userActions.js";
import store from "./store.js";

export const addTodo = (title) => {
    store.dispatch({
        type: userActions.addTodo,
        payload: {
            id: store.getState().length + 1,
            title: title,
            list: []
        }
    })
}

export const deleteTodo = (id) => {
    store.dispatch({
        type: userActions.deleteTodo,
        payload: {
            id
        }
    })
}

export const editTodo = (id, title) => {
    store.dispatch({
        type: userActions.updateTodo,
        payload: {
            id,
            title
        }
    })
}

// list
export const addItem = (todoId, itemDesc) => {
    store.dispatch({
        type: userActions.addItem,
        payload: {
            id: todoId,
            itemDescription: itemDesc
        }
    })
}

export const deleteItem = (todoId, itemId) => {
    store.dispatch({
        type: userActions.deleteItem,
        payload: {
            todoId,
            itemId
        }
    })
}

export const updateItemDesc = (todoId, itemId, itemDesc) => {
    store.dispatch({
        type: userActions.updateItemDesc,
        payload: {
            todoId,
            itemId,
            itemDesc
        }
    })
}

export const setChecked = (todoId, itemId, check) => {
    store.dispatch({
        type: userActions.setChecked,
        payload: {
            todoId,
            itemId,
            check
        }
    })
}
