export default (state = [], action) => {
  let index;
  let returnState;

  switch(action.type) {
  case 'ADD_QUOTE':
    return state.concat(action.quote)

  case 'REMOVE_QUOTE':
    index = state.findIndex((quote) => {
      return quote.id === action.quoteId;
    });
    return [].concat(state.slice(0, index), state.slice(index + 1));

  case 'UPVOTE_QUOTE':
    index = state.findIndex((quote) => {
      return quote.id === action.quoteId;
    });
    returnState = state.slice();
    returnState[index].votes++;
    return returnState;

  case 'DOWNVOTE_QUOTE':
    index = state.findIndex((quote) => {
      return quote.id === action.quoteId;
    });
    returnState = state.slice();
    if (returnState[index].votes > 0) {
      returnState[index].votes--;
    }
    return returnState;

  default: 
    return state;
  }
}
