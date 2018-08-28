export default function quotes(state = [], action) {
  switch (action.type) {
     case "ADD_QUOTE":
      return [...state, action.quote]
     case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
     case "UPVOTE_QUOTE":
      let upvote = state.slice()
      const upvoteIdx = state.map(quote => quote.id).indexOf(action.quoteId)
      upvote[upvoteIdx].votes += 1 
      return upvote 
     case "DOWNVOTE_QUOTE":
      let downvote = state.slice()
      const downvoteIdx = state.map(quote => quote.id).indexOf(action.quoteId)
      if(downvote[downvoteIdx].votes > 0) {
      	downvote[downvoteIdx].votes -= 1
      }
      else {
      	return downvote
      }
      
    default:
      return state;
  }
}