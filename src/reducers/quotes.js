import uuid from 'uuid';

const id = uuid();
console.log(id) // '1fd3234'



export default (state = [], action) => {
  let processedState;

  console.log("Action............", action)
  console.log("state............", state)
  console.log("state.quote............", state.quote)

  // console.log("Action.quote.id............", action.quote[id])


  switch (action.type) {

    case 'ADD_QUOTE':
        return [...state, action.quote];

    case 'REMOVE_QUOTE':
        // console.log("state..........................", state
        // console.log("returning..........................", state.filter(({ quoteId }) !== action.quoteId))
         // const quoteId = action.id
         // console.log("action.id..........................", action.id)
          return state.filter( item  =>  item.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
        // console.log("state..........................", state)
         processedState = state.map(quote => {
          if (quote.id === action.quoteId) {
            return { ...quote, votes: ++quote.votes}
          } else {
            return quote;
          }
        })
        return processedState;


    case 'DOWNVOTE_QUOTE':
      processedState = state.map(quote => {
      if (quote.id === action.quoteId && quote.votes != 0) {
        return { ...quote, votes: --quote.votes}
      } else {
        return quote;
      }
    })
    return processedState;

    break;


    default:
      return state;

  }
  return state;
}


// 1/1/2020

// -l29 cant read propry id of undefined


// ........

// return state.filter( item  =>  item.id !== action.quoteId)

// you don't have to put quotes around item...

// standalone questions-
// how can I see what the state looks like? the console logs don't work

// return [ ...state, state.map(item => item.votes += 1)]


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
