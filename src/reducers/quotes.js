export default function quotesReducer(state = [], action) {
    let quoteIndex;
    switch (action.type) {
      case 'ADD_QUOTE':
        console.log([...state, action.quote])
        return [...state, action.quote];

      case 'REMOVE_QUOTE':
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
        console.log([...state.slice(0, quoteIndex), ...state.slice(quoteIndex + 1)])
        return [...state.slice(0, quoteIndex), ...state.slice(quoteIndex + 1)];

      case 'UPVOTE_QUOTE':
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
        let incVoteQuote = state[quoteIndex]
        // incVoteQuote.votes = 0
        // console.log(incVoteQuote)
        incVoteQuote.votes += 1
        console.log(incVoteQuote)
        return [...state.slice(0,quoteIndex), incVoteQuote, ...state.slice(quoteIndex + 1)]

      case 'DOWNVOTE_QUOTE':
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
        if(state[quoteIndex].votes > 0) {
          let decVoteQuote = state[quoteIndex]
          decVoteQuote.votes -= 1
          return [...state.slice(0,quoteIndex), decVoteQuote, ...state.slice(quoteIndex + 1)]
        } else {
          return state
        }

      default:
        return state;
    }
}
