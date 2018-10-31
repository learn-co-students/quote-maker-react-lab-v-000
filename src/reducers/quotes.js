const quotes = (state = [], action) => {
  let index;
    let quote;
    switch(action.type) {

      case 'ADD_QUOTE':
        return state.concat(action.quote);

      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);

      case 'UPVOTE_QUOTE':
        quote = state.find(quote => quote.id === action.quoteId)
        index = state.indexOf(quote);

        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes += 1 }),
          ...state.slice(index + 1)
        ];

        case 'DOWNVOTE_QUOTE':
          quote = state.find(quote => quote.id === action.quoteId);
          index = state.indexOf(quote);
           if (quote.votes > 0) {
            return [
              ...state.slice(0, index),
              Object.assign({}, quote, { votes: quote.votes -= 1 }),
              ...state.slice(index + 1)
            ];
          }
          return state;

        default:
          return state;
    }
  }

export default quotes;
