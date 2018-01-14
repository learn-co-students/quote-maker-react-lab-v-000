export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      return state.filter((quote)=>{
        return quote.id !== action.quoteId
      })
    case 'UPVOTE_QUOTE':
      let upvoteQuote = state.filter((quote) => {
        debugger;
        return quote.id === action.quoteId[0]
      })
      console.log('Quote:')
      console.log(upvoteQuote)
      const upvoteIdx = state.indexOf(upvoteQuote)
      console.log('quoteIdx: ' + upvoteIdx)
      upvoteQuote.votes++
      return [].concat(state.slice(0, upvoteIdx), upvoteQuote, state.slice(upvoteIdx+1, state.length))
    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = state.filter((quote) => quote.id === action.quoteId)[0]
      console.log('Quote:')
      console.log(downvoteQuote)
      const quoteIdx = state.indexOf(downvoteQuote)
      console.log('quoteIdx: ' + quoteIdx)
      downvoteQuote.votes === 0 ? null : downvoteQuote.votes--
      return [].concat(state.slice(0, quoteIdx), downvoteQuote, state.slice(quoteIdx+1, state.length))
    default:
      return state;
  }
}
