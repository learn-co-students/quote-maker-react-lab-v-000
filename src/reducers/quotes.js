export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      console.log('logic to increase votes by 1')
    case 'DOWNVOTE_QUOTE':
      console.log('logic to descease votes by 1')

    default:
      return state;
  }
}
