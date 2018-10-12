export default (state = [], action) => {
  let idx;
  let quote;
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(quote);
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    // case 'UPVOTE_QUOTE':
    //   quote = state.find(quote => quote.id === action.quoteId)
    //   quote.votes += 1
    //   return state;

  case 'UPVOTE_QUOTE':
    idx = state.findIndex(quote => quote.id === action.quoteId);
    quote = state[idx];

    return [
      ...state.slice(0, idx),
      Object.assign({}, quote, { votes: quote.votes += 1 }),
      ...state.slice(idx + 1)
    ];
    //
    // case 'DOWNVOTE_QUOTE':
    //   quote = state.find(quote => quote.id === action.quoteId)
    //   if (quote.votes > 0 ){quote.votes -= 1}
    //   return state

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx]

      if (quote.votes > 0){
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, {votes: quote.votes -= 1}),
          ...state.slice(idx +1)
        ]
      }

    default:
      return state
  }
}

/// below is from solution

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
//       if (quote.votes > 0) {
//         return [
//           ...state.slice(0, index),
//           Object.assign({}, quote, { votes: quote.votes -= 1 }),
//           ...state.slice(index + 1)
//         ];
//       }
//       return state;
//
//     default:
//       return state;
//   }
// }
