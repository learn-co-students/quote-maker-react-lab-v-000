

function quotesReducer(state = [], action) {
  	let idx;
  	let quote;
  	switch (action.type) {
  		case 'ADD_QUOTE':
  			return [...state, action.quote];
  		case 'REMOVE_QUOTE':
  			idx = state.indexOf(action.id);
      		return [...state.slice(0, idx - 1), ...state.slice(idx)];
      	case 'UPVOTE_QUOTE':
      		quote = state.filter(quote => quote.id === action.quoteId)
      		quote[0].votes += 1
      		return [...quote]
      	case 'DOWNVOTE_QUOTE':
      		quote = state.filter(quote => quote.id === action.quoteId)
      		if (quote[0].votes !== 0) {
      			quote[0].votes -= 1
      		}
      		return [...quote]
  		default:
  			return state;
  	};
}

export default quotesReducer
