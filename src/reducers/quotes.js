export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      // debugger
      // //todo figure out about combine reducer reducers/index.js
      // //todo hookup remove button with action removeQuote onClick?
      // //todo find quote by id and remove
      // idx = state.quotes.indexOf(action.id);
      // return [...state, state.quotes.slice(0, idx), state.quotes.slice(idx + 1)]
      return state
    case 'UPVOTE_QUOTE':
      return state
    case 'DOWNVOTE_QUOTE':
      return state

    default:
      return state
  };
}
