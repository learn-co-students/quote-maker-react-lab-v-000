import uuid from 'uuid';

export default (state = [], action) => {
let index
let quote

  switch (action.type) {

    case 'ADD_QUOTE':
      quote = action.quote
      quote.id = uuid()
      return state.concat(quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':

    case 'DOWNVOTE_QUOTE':

    default:
      return state;
    }
}
