import uuid from 'uuid'

export default (state= [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      const newQuote = Object.assign({}, action.quote, {id: uuid()})
      return state.concat(newQuote)
    case 'REMOVE_QUOTE':
      return state.filter(filter => filter.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      let upVotedQuote = Object.assign({}, state[quoteIndex], {votes: state[quoteIndex].votes += 1})
      return [...state.slice(0, quoteIndex),upVotedQuote, ...state.slice(quoteIndex + 1)]
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      let downVotedQuote = Object.assign({}, state[quoteIndex], {votes: state[quoteIndex].votes -= 1})
      return [...state.slice(0, quoteIndex),downVotedQuote, ...state.slice(quoteIndex + 1)]
    default:
      return state
  }
}