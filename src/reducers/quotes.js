export default (state = [], action) => {
  // let index;
  // let quote;
  let newState;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      //filters outs quotes that's true to (quote.id is not equal to action.quoteId)
      //removing action.quoteId from the state

    // case 'UPVOTE_QUOTE':
    //   index = state.findIndex(quote => quote.id === action.quoteId);
    //   quote = state[index];
    //
    //   return [
    //     ...state.slice(0, index),
    //     Object.assign({}, quote, { votes: quote.votes += 1 }),
    //     ...state.slice(index + 1)
    //   ];

    case 'UPVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: ++quote.votes};
        } else {
          return quote;
        }
      })
      return newState;

    // case 'DOWNVOTE_QUOTE':
    //    index = state.findIndex(quote => quote.id === action.quoteId);
    //    quote = state[index];
    //    if (quote.votes > 0) {
    //      return [
    //        ...state.slice(0, index),
    //        Object.assign({}, quote, { votes: quote.votes -= 1 }),
    //        ...state.slice(index + 1)
    //      ];
    //    }
    //    return state;

       case 'DOWNVOTE_QUOTE':
         newState = state.map(quote => {
           if (quote.id === action.quoteId && quote.votes > 0) {
             return {...quote, votes: --quote.votes};
           } else {
             return quote;
           }
         })
         return newState;

    default:
      return state;
  }
}
