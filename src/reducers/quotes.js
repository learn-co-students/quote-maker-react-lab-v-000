export default (state = [], action) => {
  switch (action.type){
  	case "ADD_QUOTE":
  	  return state.concat({...action.quote})
  	case "REMOVE_QUOTE":
  	  let quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
  	  return [].concat(state.slice(0, quoteIndex), state.slice(quoteIndex + 1, state.length))
  	case "UPVOTE_QUOTE":
  	  let quoteVoteIndex = state.findIndex(quote => quote.id === action.quoteId)
  	  return [].concat(state.slice(0, quoteVoteIndex), {...state[quoteVoteIndex], votes: state[quoteVoteIndex].votes + 1}, state.slice(quoteVoteIndex + 1, state.length))
  	case "DOWNVOTE_QUOTE":
  	  let quoteDownVote = state.findIndex(quote => quote.id === action.quoteId)
  	  const voteMath = state[quoteDownVote].votes < 1 ? 0 : state[quoteDownVote].votes - 1
  	  return [].concat(state.slice(0, quoteDownVote), {...state[quoteDownVote], votes: voteMath}, state.slice(quoteDownVote + 1, state.length))
  	default:
  	  return state;
  }
  
}