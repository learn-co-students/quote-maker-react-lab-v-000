export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'UPVOTE_QUOTE':
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      let quote = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId);
      let quoteToDownvote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quoteToDownvote, {votes: quoteToDownvote.votes -= 1}),
        ...state.slice(index + 1)
      ];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    default:
      return state;
  }
}
