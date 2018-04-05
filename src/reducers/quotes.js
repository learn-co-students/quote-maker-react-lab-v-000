import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
  	case 'ADD_QUOTE':
  		return state.concat(action.quote);
  	case 'REMOVE_QUOTE':
  	  return state.filter(quote => quote.id !== action.quoteId);
  	case 'UPVOTE_QUOTE':
  	  let index = state.findIndex(quote => quote.id === action.quoteId);
  	  let quote = state[index];
  	  quote.votes++;
  	  return [...state.slice(0, index), quote, ...state.slice(index+1)];
  	case 'DOWNVOTE_QUOTE':
  	  index = state.findIndex(quote => quote.id === action.quoteId);
  	  quote = state[index];
  	  if (quote.votes > 0) {
  	  	quote.votes--;
  	  };
  	  return [...state.slice(0, index), quote, ...state.slice(index+1)];
  	default:
  		return state;
  };
};