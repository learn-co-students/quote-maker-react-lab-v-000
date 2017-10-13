export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let toUpvote = state.find(quote => quote.id === action.quoteId);
      return [Object.assign({}, toUpvote, { votes: ++toUpvote.votes })]
    case 'DOWNVOTE_QUOTE':
      let toDownvote = state.find(quote => quote.id === action.quoteId);
      let newVote = (toDownvote.votes > 0) ? --toDownvote.votes : 0
      return [Object.assign({}, toDownvote, { votes: newVote })]
    default:
      return state;
  }

}
