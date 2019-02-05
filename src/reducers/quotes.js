// function quotesReducer(state = [],action){
//   switch (action.type){
//     case 'CREATE_QUOTE':
//       return [...state, action.quote];

//     case 'REMOVE_QUOTE':
//       idx = state.indexOf(action.id)
//       return [...state.slice(0,idx), ...state.slice(idx + 1)]

//       case 'UPVOTE_QUOTE': 
//       return state.votes + 1

//       case 'DOWNVOTE_QUOTE':
//       return state.votes - 1

//     default:
//       return state
//   }
// }
export default (state = [], action) => {
  let index;
  let quote;
  
  switch (action.type){
      case "ADD_QUOTE":
          return state.concat(action.quote);
  
      case "REMOVE_QUOTE":
        return state.filter(quote => quote.id !== action.quoteId);

      case "DOWNVOTE_QUOTE":
        index = state.findIndex(q => q.id === action.quoteId)
        quote = state[index]
        if (quote.votes > 0){
          return [
            ...state.slice(0,index),
            Object.assign({}, quote, {votes: quote.votes -= 1}),
            ...state.slice(index + 1)
          ]}
        return state;

        case "UPVOTE_QUOTE":
        index = state.findIndex(q => q.id === action.quoteId)
        quote = state[index]
        return [
            ...state.slice(0,index),
            Object.assign({}, quote, {votes: quote.votes += 1}),
            ...state.slice(index + 1)
          ];


      default: 
        return state
  }
}