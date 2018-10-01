

export default (state = [], action) => {
  	let quote;
    let quotes;
  	switch (action.type) {
  		case 'ADD_QUOTE':
  			return [...state, action.quote];
  		case 'REMOVE_QUOTE':
  			quotes = state.filter(quote => quote.id !== action.quoteId)
      		return [...quotes];
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

// export default quotesReducer
