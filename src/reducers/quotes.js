export default (state = [], action) => {
  let quote
  let quotes

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      quotes = state.filter(el => el.id != action.quoteId)
      return quotes;

    case 'UPVOTE_QUOTE':
      quote = state.find(el => el.id == action.quoteId)
      quote.votes += 1
      return state

    case 'DOWNVOTE_QUOTE':
      quote = state.find(el => el.id == action.quoteId)
      if (quote.votes > 0) {
        quote.votes -= 1
      } else if (quote.votes <= 0) {
        quote
      }
      return state

    default:
      return state;

  }
}
