import uuid from "uuid"

// keys: id, content, author

export default (state = [], action) => {
  let idx
  switch (action.type){

    default:
      return state

    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx+1)]

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      state[idx].votes++
      return state

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if(state[idx].votes > 0) {
        state[idx].votes--
      }
      return state;
  }
}
