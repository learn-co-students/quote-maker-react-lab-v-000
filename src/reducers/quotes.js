export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      // debugger
      //todo hookup remove button with action removeQuote onClick?
      //todo find quote by id and remove
      return state
    case 'UPVOTE_QUOTE':
      return state
    case 'DOWNVOTE_QUOTE':
      return state

    default:
      return state
  };
}
