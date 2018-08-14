export default function quotes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let upvoteArray = state.slice()
      const upvoteIndex = state.map(quote => quote.id).indexOf(action.quoteId)
      upvoteArray[upvoteIndex].votes += 1
      return upvoteArray
    case 'DOWNVOTE_QUOTE':
      let downvoteArray = state.slice()
      const downvoteIndex = state.map(quote => quote.id).indexOf(action.quoteId)

      if (downvoteArray[downvoteIndex].votes > 0) {
        downvoteArray[downvoteIndex].votes -= 1
        return downvoteArray
      } else {
        return downvoteArray
      }
    default: 
      return state
  }
}
