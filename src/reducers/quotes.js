export default (state = [], action) => {

  switch(action.type){

    case 'ADD_QUOTE':
        return  state = [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter( quote => quote.quoteID !== action.quoteID)

    case 'UPVOTE_QUOTE':
    break

    case 'DOWNVOTE_QUOTE':
    break

    default:
      return state;
    }
}
