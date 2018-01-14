export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      return state.filter((quote)=>{
        return quote.id !== action.quoteId
      })
    case 'UPVOTE_QUOTE':
      let quoteForUpvote = state.filter((quote) => {
        debugger;
        return quote.id === action.quoteId
      })
      quoteForUpvote = quoteForUpvote[0]
      debugger;
      console.log('Quote:')
      console.log(quoteForUpvote)
      const upvoteIdx = state.indexOf(quoteForUpvote)
      console.log('quoteIdx: ' + upvoteIdx)
      quoteForUpvote.votes++
      return [].concat(state.slice(0, upvoteIdx), quoteForUpvote, state.slice(upvoteIdx+1, state.length))
    case 'DOWNVOTE_QUOTE':
      let quoteForDownvote = state.filter((quote) => quote.id === action.quoteId)[0]
      console.log('Quote:')
      console.log(quoteForDownvote)
      const quoteIdx = state.indexOf(quoteForDownvote)
      console.log('quoteIdx: ' + quoteIdx)
      quoteForDownvote.votes === 0 ? null : quoteForDownvote.votes--
      return [].concat(state.slice(0, quoteIdx), quoteForDownvote, state.slice(quoteIdx+1, state.length))
    default:
      return state;
  }
}
