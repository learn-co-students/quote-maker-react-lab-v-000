export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      let removeId = state.findIndex(quote => quote.id === action.quoteId)
      return state.slice(0, removeId).concat(state.slice(removeId+1))
    case 'UPVOTE_QUOTE':
      let upVoteId = state.findIndex(quote => quote.id === action.quoteId)
      let upVoteQuote = state.find(quote => quote.id === action.quoteId)
      if (!Object.keys(upVoteQuote).includes('votes')) {
        upVoteQuote['votes'] = 1
      } else {
        upVoteQuote['votes'] += 1
      }
      let stateWithOutUpVoteQuote = state.slice(0, upVoteId).concat(state.slice(upVoteId+1))
      return stateWithOutUpVoteQuote.concat(upVoteQuote)
    case 'DOWNVOTE_QUOTE':
      let downVoteId = state.findIndex(quote => quote.id === action.quoteId)
      let downVoteQuote = state.find(quote => quote.id === action.quoteId)
      if (!Object.keys(downVoteQuote).includes('votes') || downVoteQuote['votes']===0) {
        downVoteQuote['votes'] = 0
      } else {
        downVoteQuote['votes'] -= 1
      }
      let stateWithOutDownVoteQuote = state.slice(0, downVoteId).concat(state.slice(downVoteId+1))
      return stateWithOutDownVoteQuote.concat(downVoteQuote)
    default:
      return state;
  }
}
