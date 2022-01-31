import { userActions } from "./userActions.js";


function reducer(state = [], action) {
    switch (action.type) {
        case userActions.addTodo:
            return [
                ...state, action.payload
            ];

        case userActions.deleteTodo:
            return state.filter(todo => todo.id != action.payload.id)

        case userActions.updateTodo:
            return state.map(todo =>
                todo.id != action.payload.id ?
                    todo :
                    { ...todo, title: action.payload.title }
            )

        case userActions.addItem:
            return state.map(todo =>
                todo.id != action.payload.id ?
                    todo :
                    {
                        ...todo,
                        list: [
                            ...todo.list,
                            {
                                id: todo.list.length + 1,
                                itemDescription: action.payload.itemDescription,
                                checked: false
                            }
                        ]
                    }
            )

        case userActions.deleteItem:
            return state.map(
                todo =>
                    todo.id != action.payload.todoId ?
                        todo :
                        {
                            ...todo,
                            list: todo.list.filter(item => item.id != action.payload.itemId)
                        }

            )

        case userActions.updateItemDesc:
            return state.map(todo =>
                todo.id != action.payload.todoId ?
                    todo :
                    {
                        ...todo,
                        list: todo.list.map(item =>
                            item.id != action.payload.itemId ?
                                item : { ...item, itemDescription: action.payload.itemDesc }

                        )
                    }
            )

        case userActions.setChecked:
            return state.map(todo =>
                todo.id != action.payload.todoId ?
                    todo :
                    {
                        ...todo,
                        list: todo.list.map(item =>
                            item.id != action.payload.itemId ?
                                item : { ...item, checked: action.payload.check }

                        )
                    }
            )
        default:
            return state;
    }
}

export default reducer;