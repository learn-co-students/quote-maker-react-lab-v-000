export default function quotes(state = [], action){
  // debugger
  switch (action.type) {
    case 'ADD_QUOTE':
      return Object.assign([], [...state.concat(action.quote)]);
    case 'REMOVE_QUOTE':
      return Object.assign([], [...state.filter( quote => quote.id !== action.quoteId)]);
    case 'UPVOTE_QUOTE':

      var upQuote = state.find( item => item.id === action.quoteId);
      upQuote.votes > 0 ? upQuote.votes += 1 : upQuote.votes = 1;
      return Object.assign([], [...state.filter( quote => quote.id !== action.quoteId)].concat(upQuote));
    case 'DOWNVOTE_QUOTE':
      var downQuote = state.find( item => item.id === action.quoteId);
      downQuote.votes > 0 ? downQuote.votes -= 1 : downQuote.votes = 0;
      return Object.assign([], [...state.filter( quote => quote.id !== action.quoteId)].concat(downQuote));
    default:
      return state;
  }
}
