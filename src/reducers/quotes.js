import uuid from 'uuid';


export default function quotes(state = [], action){
  switch(action.type){
    case 'ADD_QUOTE':
      console.log(action.quote)
      const id = uuid();
      return [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      let newState =  state.filter(function(e){
        return e.id !== action.quoteId
      })
      return newState;

      case 'UPVOTE_QUOTE':
        let objIndex = state.findIndex((obj => obj.id === action.quoteId))
        state[objIndex].votes = state[objIndex].votes + 1
        return[...state];

      case 'DOWNVOTE_QUOTE':
          var objIndex = state.findIndex((obj => obj.id === action.quoteId))
          if(state[objIndex].votes === 0){
            return[...state];
          } else {
          state[objIndex].votes = state[objIndex].votes - 1
          return[...state];
          }
    
      default:
        return state;
  }
}