import { userActions } from './userActions.js'
import store from './store.js'
import * as dispatches from './actions.js'

// window.addEventListener("DOMContentLoaded", () => {

// })


const createTodoBtn = document.getElementById("createTodoBtn");
const createTodoInput = document.getElementById("createTodoInput");


createTodoBtn.addEventListener('click', () => {
    const todoText = createTodoInput.value.trim()
    if (todoText) {
        dispatches.addTodo(todoText);
        createTodoInput.value = "";
    }
})


function render() {
    // getElementsByTagName will return an array of elements
    const main = document.getElementsByTagName("main")[0];

    main.innerHTML = ''

    store.getState().map(todo => {
        let div = document.createElement('div');
        // Title
        const todoTitle = document.createElement('h3')
        todoTitle.textContent = todo.title
        // List of todos
        const ul = document.createElement('ul')
        displayItems(todo.list).map(li => ul.append(li))
        div.append(todoTitle)
        div.append(ul)
        main.append(div)
    })
}

const displayItems = (list) => {
    const listItems = list.map(item => {
        // todo
        const itemTitle = document.createElement('span')
        itemTitle.textContent = item.itemDescription;

        // checkbox
        const itemCheckBox = document.createElement('input');
        itemCheckBox.setAttribute('type', 'checkbox');
        itemCheckBox.checked = item.checked;

        // list item
        const li = document.createElement('li');
        li.append(itemCheckBox)
        li.append(itemTitle)

        return li
    })
    // join will change array into string
    return listItems
}

dispatches.addTodo('Shopping Todo')
dispatches.addTodo('School Todo')

// dispatches.deleteTodo(1)
dispatches.editTodo(1, "Bucket List")
dispatches.addItem(1, "Maldive")
dispatches.addItem(1, "Sky Diving")
// dispatches.deleteItem(1, 2)
dispatches.updateItemDesc(1, 1, "Atlantic")
dispatches.setChecked(1, 2, true)
dispatches.setChecked(1, 1, true)

render();
store.subscribe(render)