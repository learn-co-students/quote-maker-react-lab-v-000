
export default function manageQuotes(state = { quotes: [] }, action) {
  switch (action.type) {

    case 'ADD_QUOTE':
      return Object.assign({}, state, {
        quotes: state.quotes.concat(action.quote)
      });
    case 'REMOVE_QUOTE':
      return Object.assign({}, state, {
        quotes: state.quotes.concat(action.quote)
      });
    case 'UPVOTE_QUOTE':
      return Object.assign({}, state, {
        quotes: state.quotes.concat(action.quote)
      });
    case 'DOWNVOTE_QUOTE':
      return Object.assign({}, state, {
        quotes: state.quotes.concat(action.quote)
      });
    default:
      return state;

  }
}
