import uuid from 'uuid'

export default function(state= {quoteList: []}, action) {
  switch(action.type){
    case 'ADD_QUOTE':
      const newQuote = Object.assign({}, action.quote)
      return Object.assign({}, state, {quoteList: state.quoteList.concat(newQuote)})
    case 'REMOVE_QUOTE':
      return {quoteList: state.quoteList.filter(filter => filter.id !== action.quoteId)}
    case 'UPVOTE_QUOTE':
      let quoteIndex = state.quoteList.findIndex(quote => quote.id === action.quoteId)
      let upVotedQuote = Object.assign({}, state.quoteList[quoteIndex], {votes: state.quoteList[quoteIndex].votes += 1})
      return {quoteList: [...state.quoteList.slice(0, quoteIndex),upVotedQuote, ...state.quoteList.slice(quoteIndex + 1)]}
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.quoteList.findIndex(quote => quote.id === action.quoteId)
      let newVoteCount = 0
      if (state.quoteList[quoteIndex].votes > 0){
        newVoteCount = state.quoteList[quoteIndex].votes -= 1
      }
      let downVotedQuote = Object.assign({}, state.quoteList[quoteIndex], {votes: newVoteCount})
      return {quoteList: [...state.quoteList.slice(0, quoteIndex),downVotedQuote, ...state.quoteList.slice(quoteIndex + 1)]}
    default:
      return state
  }
}