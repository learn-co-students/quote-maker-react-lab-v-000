

export default function quotes(state=[], action){
  let idx
  let newQuotes
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.map((element)=>element.id).indexOf(action.quoteId)
      return [...state.slice(0,idx),...state.slice(idx+1)]

    case "UPVOTE_QUOTE":
      newQuotes = state.map(function(obj) {
        if (obj.id===action.quoteId) {
          obj.votes+=1
          return obj
        }else {
          return obj
        }
      })
      return newQuotes

    case "DOWNVOTE_QUOTE":

      newQuotes = state.map(function(obj) {
        if (obj.id === action.quoteId) {
          obj.votes = Math.max(obj.votes-1, 0)
          return obj
        } else {
          return obj
        }
      })
      return newQuotes
    default:
      return state


  }
}
