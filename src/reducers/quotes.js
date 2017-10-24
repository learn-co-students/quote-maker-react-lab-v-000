import uuid from 'uuid';
const id = uuid();

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      var index = state.findIndex(quote => quote.id === action.quoteId)
      var quote = state[index]
      return [Object.assign({}, quote, { votes: quote.votes += 1})]
    case "DOWNVOTE_QUOTE":
      var index = state.findIndex(quote => quote.id === action.quoteId)
      var quote = state[index]
      if (quote.votes === 0) {
        return state
      } else {
        return [Object.assign({}, quote, { votes: quote.votes -= 1})]
      }
    default:
      return state;
  }
}
