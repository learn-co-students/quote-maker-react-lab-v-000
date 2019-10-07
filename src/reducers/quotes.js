import QuoteForm from "../containers/QuoteForm";

export default (state = [], action) => {

  switch (action.type) {
    
    case "ADD_QUOTE":
      return [
        ...state,
        {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes
        }
      ]

    case "REMOVE_QUOTE": 
      let newState = state.slice()
      newState.splice(action.index, 1)
      return newState

    case "UPVOTE_QUOTE":
      return state.map((quote) => {
        if (quote.id !== action.quoteId) {
          return quote
        }
        return {
          ...quote,
          votes: quote.votes + 1
        }
      })

      case "DOWNVOTE_QUOTE":
      return state.map((quote) => {
        if (quote.id !== action.quoteId) {
          return quote
        }
        if (quote.votes > 0) {
          return {
            ...quote,
            votes: quote.votes - 1
          }
        } else {
          return quote
        }
      })

    default:
      return state;
  }
}
