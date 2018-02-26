
export default (state = [], action) => { //state = {content: id: votes: author:}
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter((quote)=> {return quote.id !== action.quoteId})
    case 'UPVOTE_QUOTE': //quote works
      const upQuote = state.find((quote) => {return quote.id === action.quoteId})
      upQuote.votes++
      return state
    case 'DOWNVOTE_QUOTE':
      const downQuote = state.find((quote) => {return quote.id === action.quoteId})
      if(downQuote.votes !== 0){
        downQuote.votes--
      }
      return state
    default:
      return state
  }
}
