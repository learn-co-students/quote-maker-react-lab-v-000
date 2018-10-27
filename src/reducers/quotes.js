export default (state = [], action) =>  {
  let index;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      debugger 
      // index = action.quote.id
      // return {
      //   ...state,
      //   quotes: [
      //     state.slice(0, index),
      //     state.slice(index +1),
      //   ]
      // }
    // case 'UPVOTE_QUOTE':
    //   index = state.indexOf(action.quote.id)
    default:
      return state
  }
}
