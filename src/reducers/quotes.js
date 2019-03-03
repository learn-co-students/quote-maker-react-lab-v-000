export default (state = [], action) => {
  let obj
  let votes
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state,action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(obj => obj.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      obj = state.filter(obj => obj.id === action.quoteId)
      votes = obj[0].votes
      debugger
      return [{...obj[0], votes: votes+1}]

    case 'DOWNVOTE_QUOTE':
      obj = state.filter(obj => obj.id === action.quoteId)
      votes = (obj[0].votes - 1) < 0 ? 0 : (obj[0].votes - 1)
      return [{...obj[0], votes: votes}]

    default:
      return state;
  }
}
