export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const upvoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      state[upvoteIndex].votes += 1
      return state;
    case 'DOWNVOTE_QUOTE':
      const downvoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      if(state[downvoteIndex].votes > 0){
        state[downvoteIndex].votes -= 1
      }
      return state;
    default:
      return state;
  }
}
