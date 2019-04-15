export default (state = [], action) => {
  let voteCount, updatedQuote;
  
  const idx = state.map( q => q.id ).indexOf(action.quoteId)

  switch (action.type) {
	case 'ADD_QUOTE':
	  return [...state, action.quote]

    case 'REMOVE_QUOTE':
	  return [...state.slice(0, idx), ...state.slice(idx + 1)]

	case 'UPVOTE_QUOTE':
	  voteCount = state[idx].votes + 1
	  updatedQuote = {...state[idx], votes: voteCount}
	  return [
	  	...state.slice(0, idx), 
	  	updatedQuote,
	  	...state.slice(idx + 1)]

	 case 'DOWNVOTE_QUOTE':
	   voteCount = (state[idx].votes - 1 < 0) ? 0 : state[idx].votes - 1
	   updatedQuote = {...state[idx], votes: voteCount}
	   return [
		   ...state.slice(0, idx),
			updatedQuote,
			...state.slice(idx + 1)]

    default:
  	  return state;
  }

}
