export default (state = [], action) => {
  let index, quote;
  switch (action.type) {
  
    case 'ADD_QUOTE': 
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(obj => obj.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(obj => obj.id === action.quoteId);
      quote = state[index]

      return [
        ...state.slice(0, index), {...quote, votes: quote.votes += 1 },
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(obj => obj.id === action.quoteId);
      quote = state[index]
      if (quote.votes > 0){

      return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes -= 1 },
        ...state.slice(index + 1)
      ];
    
      } else {
        return state;
      }

    default:
      return state;
  }
}