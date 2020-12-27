import uuid from 'uuid';

const id = uuid();
console.log(id) // '1fd3234'



export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
        return [...state, action.quote]
    case 'REMOVE_QUOTE':
        console.log("state..........................", state)
        // console.log("returning..........................", state.filter(({ quoteId }) !== action.quoteId))
         // const quoteId = action.id
         console.log("action.id..........................", action.id)
         return {
           // ...state,
           state.filter(({ item }) =>  item.id !== action.id)
         }

      break;
    default:

  }
  return state;
}

// standalone questions-
// how can I see what the state looks like? the console logs don't work


// approaches-

// ---the 'remove' case on the reducer----
// 1
// I am trying to use the spread operator for the return value in the reducer's 'remove' case. But
// I haven't been able to get it working yet.
// https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
// const myObject = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// const { a, ...noA } = myObject;
// console.log(noA); // => { b: 2, c: 3 }

// 2
// return state.filter(({ id }) !== action.data)
// https://stackoverflow.com/questions/37777525/delete-an-item-from-redux-state

// 3
// the last solution (2) is meant for arrays. i'll try filtering the object
// {...state,currentMenu: action.menu.filter((menu) =>
// state.currentCategoryId == menu.category_id)}


// notes-
// (on the add quote case) it was fine, but it wasn't actually modifying the store bc the reducer wasn't returning a new State
// whenever you're calling on the thing you're passing to your reducer, it's always an object/hash from the action.
