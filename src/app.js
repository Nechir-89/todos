import { userActions } from './userActions.js'
import store from './store.js'
import * as dispatches from './actions.js'

dispatches.addTodo('Shopping Todo')
dispatches.addTodo('School Todo')

// dispatches.deleteTodo(1)
dispatches.editTodo(1, "Bucket List")
dispatches.addItem(1, "Maldive")
dispatches.addItem(1, "Sky Diving")
// dispatches.deleteItem(1, 2)
dispatches.updateItemDesc(1, 1, "Atlantic")
dispatches.setChecked(1, 2, true)



console.log("I'm all working")
console.log(userActions);
console.log(store.getState());
