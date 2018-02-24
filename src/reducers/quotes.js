export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      let index = state.indexOf(action.quoteId);
      return [].concat(state.slice(0, index), state.slice(index + 1));
    default:
      return state;
  }
}
