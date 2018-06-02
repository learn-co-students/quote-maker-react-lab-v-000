export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [].concat(state, action.quote)
    case "REMOVE_QUOTE":
      let removed = state.filter(obj => {
        return obj.id !== action.quoteId;
      })
      return removed
      // let qIndex = state.findIndex((object) => {
      //   return object.id === action.quoteId;
      // });
      // return [].concat(state.slice(0, qIndex), state.slice(qIndex + 1, state.length))
    case "UPVOTE_QUOTE":
      const upvoted = state.map(obj => {
        if (obj.id === action.quoteId) {
          obj.votes += 1;
          }
        return obj
      });
      return upvoted
    case "DOWNVOTE_QUOTE":
      const downvoted = state.map(obj => {
        if (obj.id === action.quoteId && obj.votes !== 0) {
          obj.votes -= 1;
          }
        return obj
      });
      return downvoted
    default:
    return state
  }
  
}

// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]