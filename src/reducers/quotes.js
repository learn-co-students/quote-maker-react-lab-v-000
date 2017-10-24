export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      // {debugger};
      return state.concat(action.quotes)
    case 'REMOVE_QUOTE':
      const quoteId = state.props.quotes.filter(id => id == action.id )
      return action.quotes
    default:
      return state;
  }
}