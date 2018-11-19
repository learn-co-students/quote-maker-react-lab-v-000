import uuid from "uuid";

export default quotesReducer(state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      let currentQuote = initialState.filter(
        quote => quote.id === action.quoteId
      );
      if (currentQuote.length > 0) {
        return [{ ...quote, votes: quote.votes + 1 }];
      } else {
        return initialState;
      }

      case 'DOWNVOTE_QUOTE':
        let currentQuote = initialState.filter(
          quote => quote.id === action.quoteId
        );
        if (currentQuote.length > 0) && (currentQuote.votes > 0) {
          return [{ ...quote, votes: quote.votes - 1 }];
        } else {
          return initialState;
        }

  default:
    return state;
}
