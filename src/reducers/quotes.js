export default (state = [], action) => {
  let index; // declaring index variable (its current value is undefined)

  switch (action.type) {
  	case 'ADD_QUOTE':
  	  return [...state, action.quote];
  	case 'REMOVE_QUOTE':
  	  return state.filter((quoteObject) => quoteObject.id != action.quoteId)
  	case 'UPVOTE_QUOTE':
  	  index = state.findIndex(quoteObject => quoteObject.id === action.quoteId)
  	  let upvotedQuote = {...state[index], votes: state[index].votes + 1 };
  	  return [...state.slice(0, index), upvotedQuote, ...state.slice(index + 1)]
  	case 'DOWNVOTE_QUOTE': // handles 'DOWNVOTE_QUOTE' and decrements vote count by 1 if vote count is positive
  	  index = state.findIndex(quoteObject => quoteObject.id === action.quoteId)
  	  let quote = state[index];
  	  if (quote.votes) { // 0 is falsy in JS
  	  	let downvotedQuote = {...quote, votes: quote.votes - 1};
  	  	return [...state.slice(0, index), downvotedQuote, ...state.slice(index + 1)]
  	  }
  	  return state;
  	default:
  	  return state;
  }
}