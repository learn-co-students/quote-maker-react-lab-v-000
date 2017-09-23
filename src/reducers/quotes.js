export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_QUOTE':
        return [].concat(state, action.quote)

        case 'REMOVE_QUOTE':
        const idx = state.indexOf(action.quote)
        return state.filter(quote => quote.id !== action.quoteId)

        case 'UPVOTE_QUOTE':
        return state.map((quote, index) => {
         if (quote.id === action.quoteId) {
           quote.votes = 1
         }
         return quote
       })

        case 'DOWNVOTE_QUOTE':
        return state.map((quote, index) => {
         if (quote.id === action.quoteId && quote.votes > 0) {
           quote.votes -= 1
         }
         return quote
       })

        default:
          return state;

    }
}
