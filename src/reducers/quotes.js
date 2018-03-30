export default (state = [], action) => {
  switch (action.type) {
    	case 'ADD_QUOTE':
    		return state.concat(Object.assign({}, action.quote, {votes: 0}))

    	case 'REMOVE_QUOTE':
    		return state.filter(quote=> quote.id != action.quoteId)

    	case 'UPVOTE_QUOTE':
    		return state.map(quote=> quote.id == action.quoteId ? Object.assign({}, quote, {votes: quote.votes + 1}) : quote)

    	case 'DOWNVOTE_QUOTE':
    		return state.map(quote=> quote.id == action.quoteId ? Object.assign({}, quote, {votes: Math.max(quote.votes - 1, 0)}) : quote)
  
    	default:
    		return state;
    }
}