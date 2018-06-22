import uuid from 'uuid';

const id = uuid();
console.log(id)

export default (state = [], action) => {
  switch (action.type) {

    case "ADD_QUOTE":
      return [].concat(state, action.quote)

    case "REMOVE_QUOTE":
      // let idx = state.indexOf(action.quote)
      // return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      let index = state.findIndex(quote => quote.id === action.quoteId);
      let quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
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
    return state
  }
}
