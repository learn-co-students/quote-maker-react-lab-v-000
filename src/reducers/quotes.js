export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [ ...state, action.quote ];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId)
      // return entire state, except with the selected quote replaced by a copy whose upvote key is incremented by one
      // array.slice(index) will return a slice of the array from index to end
      return [...state.slice(0, index), Object.assign({}, state[index], {votes: state[index].votes += 1}), ...state.slice(index + 1)]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      if (state[index].votes - 1 < 0 ) {
        return state
      } else {
        return [...state.slice(0, index), Object.assign({}, state[index], {votes: state[index].votes -= 1}), ...state.slice(index + 1)]
      }
    default:
      return state;
    }
}
