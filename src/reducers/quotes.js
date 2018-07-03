

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat([action.quote])
      //return action.quote
      //return state.push(action.quote) ;
    case 'REMOVE_QUOTE':
      const newState = state.filter((quote) => quote.id !== action.quoteId)
      return newState
    // case 'UPVOTE_QUOTE':
    //   const quote = state
    default:
      return state;
  }
}
// state.push(action.quote) ;
