export default (state = [], action) => {
  let index;
  let quote;
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.indexOf(action.quoteId);
      return state.filter(quote => quote.id !== action.quoteId);

      case 'UPVOTE_QUOTE':
            index = state.findIndex(quote => quote.id === action.quoteId);
            quote = state[index];

            return [
              ...state.slice(0, index),
              Object.assign({}, quote, { votes: quote.votes += 1 }),
              ...state.slice(index + 1)
            ];

          case 'DOWNVOTE_QUOTE':
            index = state.findIndex(quote => quote.id === action.quoteId);
            quote = state[index];
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
