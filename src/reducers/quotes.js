export default(state = [], action) => {
  let idx;

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);

    default:
      return state;
  }
}