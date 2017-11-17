let index, quote, newArr;
import uuid from 'uuid';
export default (state = [],action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(Object.assign(action.quote, {id: uuid(), votes: 0}))
    case 'REMOVE_QUOTE':
      return state.filter(quote=>quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      // state.forEach((quote) => {
      //   if (quote.id === action.quoteId) {
      //     quote.votes += 1
      //     console.log(quote.votes)
      //   }
      // })
      // return state;
      //
      // Nothing happens when I dispatch an action
      // Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this.
      // Never mutate reducer arguments
      // It is tempting to modify the state or action passed to you by Redux. Don't do this!
      // Redux assumes that you never mutate the objects it gives to you in the reducer. Every single time, you must return the new state object. Even if you don't use a library like Immutable, you need to completely avoid mutation.
      index = state.findIndex((quote)=>quote.id === action.quoteId);
      quote = state[index]
      newArr = [...state];
      newArr[index].votes = quote.votes + 1;
      return newArr;

    case 'DOWNVOTE_QUOTE':
      // state.forEach((quote) => {
      //   if (quote.id === action.quoteId && quote.votes > 0) {
      //     quote.votes -= 1
      //     console.log(quote.votes)
      //   }
      // })
      // return state;
      index = state.findIndex((quote)=>quote.id === action.quoteId);
      quote = state[index]
      newArr = [...state];
      if (quote.votes > 0) {
        newArr[index].votes = quote.votes - 1;
      }
      return newArr;
    default:
      return state;
  }
}
