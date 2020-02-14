import uuid from 'uuid';

export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state;
  }
}
