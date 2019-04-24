export default (state = [], action) => {

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
    
    case 'UPVOTE_QUOTE':

    case 'DOWNVOTE_QUOTE':
      
    default: 
      return state;
  }
}
