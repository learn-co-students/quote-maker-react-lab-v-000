export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_QUOTE':
			return state = state.concat({
				...action.quote
			});
		case 'REMOVE_QUOTE':
			return state = state.filter(quote => quote.id !== action.quoteId ? quote : null);
		case 'UPVOTE_QUOTE':
			return state = state.map(quote => quote.id === action.quoteId ? 
				{
					...quote,
					votes: quote.votes + 1
				} : quote);
		case 'DOWNVOTE_QUOTE':
			return state = state.map(quote => quote.id === action.quoteId && quote.votes !== 0 ? 
				{
					...quote,
					votes: quote.votes - 1
				} : quote);
		default:
			return state;
	}
}
