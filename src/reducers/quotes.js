export default (state = [], action) => {
  //let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      ++quote.votes
      return state

    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes !== 0) --quote.votes
      return state;

    default: 
      return state;
  }
}
