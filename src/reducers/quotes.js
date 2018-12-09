import uuid from 'uuid';

export default (state = [], action) => {

  switch (action.type) {

    case 'ADD_QUOTE':
      return [].concat(state, action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId)

    case 'UPVOTE_QUOTE':
      var upvotedIndex = state.findIndex(quote => quote.id === action.quoteId)
      state[upvotedIndex].votes++
      return state;

    case 'DOWNVOTE_QUOTE':
      var downvotedIndex = state.findIndex(quote => quote.id === action.quoteId)
      if (state[downvotedIndex].votes > 0) {
        state[downvotedIndex].votes--
      }
      return state;
    default:
      return state;
  }
}