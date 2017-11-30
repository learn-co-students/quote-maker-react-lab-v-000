export default (state = [], action) => {
    switch (action.type) {
 
     case "ADD_QUOTE":
      return state.concat(action.quote);
 
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id != action.quoteId)

    case 'UPVOTE_QUOTE':
      let up_index = state.findIndex(quote => quote.id === action.quoteId)
      state[up_index].votes++
      return state

      case 'DOWNVOTE_QUOTE':
      let down_index = state.findIndex(quote => quote.id === action.quoteId)
      if(state[down_index].votes>0){
      state[down_index].votes--
      }
      return state
 
    default:
      return state;
    }

}