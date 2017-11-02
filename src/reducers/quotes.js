export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      let indexUpvote = state.findIndex(quote => quote.id === action.quoteId)
      let quoteUpvote = state[indexUpvote]
      return [
        ...state.slice(0, indexUpvote),
        Object.assign({}, quoteUpvote, { votes: quoteUpvote.votes += 1 }),
        ...state.slice(indexUpvote + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      let indexDownvote = state.findIndex(quote => quote.id === action.quoteId)
      let quoteDownvote = state[indexDownvote]
      if (quoteDownvote.votes > 0) {
        return [
          ...state.slice(0, indexDownvote),
          Object.assign({}, quoteDownvote, { votes: quoteDownvote.votes -= 1 }),
          ...state.slice(indexDownvote + 1)
        ];
      }
      return state;
    default:
    return state;
  }
}
