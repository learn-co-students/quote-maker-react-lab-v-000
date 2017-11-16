export default (state = [],action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return Object.assign(state, state.concat(action.quote))
    case 'REMOVE_QUOTE':
      return Object.assign(state, state.filter(quote=>quote.id !== action.id))
    default:
      return state;
  }

}
