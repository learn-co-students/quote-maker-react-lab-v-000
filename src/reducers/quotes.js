export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      }
      return [].concat(state, quote);

    case 'REMOVE_QUOTE':
      const quotes = state.filter(quote => quote.id !== action.quoteId);
      return [].concat(quotes);

    case 'UPVOTE_QUOTE':
        var idx = state.findIndex(quote => quote.id === action.quoteId);
        var quote = state[idx];

      return [
        ...state.slice(0,idx),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(idx + 1)
      ]

    case 'DOWNVOTE_QUOTE':
        idx = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[idx];

      return [
        ...state.slice(0, idx),
        quote.votes === 0 ? Object.assign({}, quote) : Object.assign({}, quote, { votes: quote.votes -= 1 }),
        ...state.slice(idx + 1)
      ]

  }

  return state;
}