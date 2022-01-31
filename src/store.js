import reducer from './reducer.js'
let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
// design example
// [
//     {
//         title: "shoping list",
//         id: 1,
//         list: [
//             {
//                 id: 1,
//                 itemDescription: "Grocery",
//                 checked: true
//             },
//             {
//                 id: 2,
//                 itemDescription: "Meat",
//                 checked: false
//             },
//             {
//                 id: 3,
//                 itemDescription: "Some bread",
//                 checked: false
//             },
//         ]
//     },
//     {
//         title: "Schole",
//         id: 1,
//         list: [
//             {
//                 id: 1,
//                 itemDescription: "Math homework",
//                 checked: true
//             },
//             {
//                 id: 2,
//                 itemDescription: "Geography Test",
//                 checked: false
//             },
//             {
//                 id: 3,
//                 itemDescription: "Repair my bicycle",
//                 checked: false
//             },
//         ]
//     }
// ]
