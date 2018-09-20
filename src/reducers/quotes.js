

const quotesReducer= (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
     return [...state, action.quote]
     case 'REMOVE_QUOTE':
     return state.filter(quote => quote.id !== action.quoteId)
     case 'UPVOTE_QUOTE':
      return [...state, 
              {...action.quote, votes: action.votes + 1
              }]
    default:
      return state
  }
}

export default quotesReducer;