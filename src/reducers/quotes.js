import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {
        author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: 0
      }];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id !== action.quoteId) {
          return quote
        }
        return {
          ...quote,
          votes: quote.votes + 1
        }
      })
    case 'DOWNVOTE_QUOTE':
    return state.map(quote => {
      if (quote.id !== action.quoteId) {
        return quote
      }
      if (quote.votes !== 0) {
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
