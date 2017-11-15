export default (state = {
  quotes: [],
}, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return Object.assign(state, {quotes: state.quotes.concat(action.quote)})
    default:
      return state;
  }

}
