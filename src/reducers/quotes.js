// import uuid from 'uuid'

export default (state = [], action) => {
  // debugger
  console.log(action);
  switch (action.type) {

  
    case 'ADD_QUOTE':
     return state.concat(action.quote)
  
    
    case 'removeQuote':

      state.concat(action.quote)
    case 'upVoteQuote':
    

      state.concat(action.quote)
      
    case 'downvoteQuote':
  

      state.concat(action.quote)

    default:
      return state;
  }
}