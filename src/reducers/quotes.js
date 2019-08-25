export default (state = [], action) => {
    switch (action.type) {
      case "ADD_QUOTE":
        return state.concat([action.quote])
      case "REMOVE_QUOTE":
        const quoteToBeRemoved = state.findIndex(quote => quote.id === action.quoteId);
        return [...state.slice(0, quoteToBeRemoved), ...state.slice(quoteToBeRemoved + 1)];
      default:
        return state;
    }
}
