export default (state = [], action) => {
  let quote
  let idx
  let newQuote
  let votes

  switch (action.type) {
    case 'ADD_QUOTE':
      votes = (action.quote.votes === "undefined" || action.quote.votes === null) ? 0 : action.quote.votes
      return [
        ...state,
        {
          content: action.quote.content,
          author: action.quote.author,
          votes: votes,
          id: action.quote.id
        }
      ]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId)[0]
      idx = state.indexOf(quote)
      newQuote = [{
        ...quote,
        votes: quote.votes + 1
      }]

      return state.slice(0, idx).concat(newQuote).concat((state.slice(idx + 1, state.length)))

    case 'DOWNVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId)[0]
      idx = state.indexOf(quote)
      newQuote = (quote.votes === 0) ? [{...quote}] : [{...quote, votes: quote.votes - 1}]

      return state.slice(0, idx).concat(newQuote).concat((state.slice(idx + 1, state.length)))

    default:
      return state
  }
}
