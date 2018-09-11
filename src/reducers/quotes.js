export default (state = [], action) => {
  let result = state;
  switch (action.type) {
    case "ADD_QUOTE": {
      result = [...state, action.quote];
      break;
    }
    case "REMOVE_QUOTE": {
      const index = state.findIndex(quote => quote.id === action.quoteId);
      if (index === 0) {
        result = [...state.slice(1, state.length)]
      } else if(index === state.length - 1) {
        result = [...state.slice(0, state.length - 1)]
      } else {
        result = [...state.slice(0,index), ...state.slice(index + 1, state.length)];
      }
      break;
    }
    case "UPVOTE_QUOTE": {
      const index = state.findIndex(quote => quote.id === action.quoteId);
      if (index === 0) {
        result = [{...state[index], votes: state[index].votes + 1},...state.slice(1,state.length)]
      } else if(index === state.length - 1) {
        result = [...state.slice(0,state.length - 1),{...state[index], votes: state[index].votes + 1}]
      } else {
        result = [...state.slice(0,index),{...state[index], votes: state[index].votes + 1},...state.slice(index + 1, state.length)];
      }
      break;
    }
    case "DOWNVOTE_QUOTE": {
    const index = state.findIndex(quote => quote.id === action.quoteId);
      if (state[index].votes > 0) {
        if (index === 0) {
          result = [{...state[index], votes: state[index].votes - 1},...state.slice(1,state.length)]
        } else if(index === state.length - 1) {
          result = [...state.slice(0,state.length - 1),{...state[index], votes: state[index].votes - 1}]
        } else {
          result = [...state.slice(0,index),{...state[index], votes: state[index].votes - 1},...state.slice(index + 1, state.length)];
        }
      }
      break;
    }
    default:
      break;
  }
  return result;
}
