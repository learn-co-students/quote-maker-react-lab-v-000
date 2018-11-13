export default (state = [], action) => {
  let i;
  let newQuote;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      debugger
      i = state.findIndex(quote => quote.id === action.quoteId)
      // newQuote = {...action.quoteId, votes: action.quoteId.votes +=1}
      // return [...state.slice(0, i), newQuote, ...state.slice(i+1)]

      quote = state[i]
      return [...state.slice(0, i), Object.assign({}, quote, { votes: quote.votes += 1 }), ...state.slice(i+1)]

    case 'DOWNVOTE_QUOTE':
      i = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[i]
      debugger
      if (quote.votes > 0) {
        newQuote = {...quote, votes: quote.votes -=1}
        return [...state.slice(0, i), newQuote, ...state.slice(i+1)]
      }
      return state;
    default:
      return state
  }
}

// export default (state = [], action) => {
//   let index;
//   let quote;
//
//   switch (action.type) {
//
//     case 'ADD_QUOTE':
//       return state.concat(action.quote);
//
//     case 'REMOVE_QUOTE':
//       return state.filter(quote => quote.id !== action.quoteId);
//
//     case 'UPVOTE_QUOTE':
//       index = state.findIndex(quote => quote.id === action.quoteId);
//       quote = state[index];
//
//       return [
//         ...state.slice(0, index),
//         Object.assign({}, quote, { votes: quote.votes += 1 }),
//         ...state.slice(index + 1)
//       ];
//
//     case 'DOWNVOTE_QUOTE':
//       index = state.findIndex(quote => quote.id === action.quoteId);
//       quote = state[index];
      // if (quote.votes > 0) {
      //   return [
      //     ...state.slice(0, index),
      //     Object.assign({}, quote, { votes: quote.votes -= 1 }),
      //     ...state.slice(index + 1)
      //   ];
      // }
//       return state;
//
//     default:
//       return state;
//   }
// }
