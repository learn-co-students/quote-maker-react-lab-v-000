

export default (state = [], action) => {
  let index;
  let quote;
  
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat([action.quote])
      //return action.quote
      //return state.push(action.quote) ;
    case 'REMOVE_QUOTE':
      const newState = state.filter((quote) => quote.id !== action.quoteId)
      return newState
    case 'UPVOTE_QUOTE':
       index = state.findIndex(quote => quote.id === action.quoteId);
       quote = state[index];

       return [
         ...state.slice(0, index),
         Object.assign({}, quote, { votes: quote.votes += 1 }),
         ...state.slice(index + 1)
       ];

     case 'DOWNVOTE_QUOTE':
       index = state.findIndex(quote => quote.id === action.quoteId);
       quote = state[index];
       if (quote.votes > 0) {
         return [
           ...state.slice(0, index),
           Object.assign({}, quote, { votes: quote.votes -= 1 }),
           ...state.slice(index + 1)
         ];
       }
       return state;
    default:
      return state;
  }
}
// state.push(action.quote) ;
