export default (state = [], action) => {
  console.log(action)
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      console.log(state)
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      console.log(state)
      return  state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      console.log("UP")
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      console.log("DOWN")
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
