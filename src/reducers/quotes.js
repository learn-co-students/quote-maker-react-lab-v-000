
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
    return state.concat(action.quote)

    case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
    const index = state.findIndex(quote => quote.id === action.quoteId )
    break;
    default:
    return state;

  }
}
