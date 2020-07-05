export default (state = [], action) => {
  let idx;
  let newState;
  let obj;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      newState = [...state]
      obj = {...newState[idx]}
      obj.votes +=1
      newState[idx] = obj
      return newState

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      newState = [...state]
      obj = {...newState[idx]}
      if (obj.votes > 0) {
        obj.votes -=1
        newState[idx] = obj
      }
      return newState
    

    default:
      return state;
  }
}