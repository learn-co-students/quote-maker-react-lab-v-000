export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
      //can also return [...state, action.quote]   

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)  //returning quotes that don't match quoteId

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index]

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, {votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

      //can also do
      //case 'UPVOTE_QUOTE':
      //let newState = state.map(quote => {
        //if (quote.id === action.quoteId) {
          //return {...quote, votes: ++quote.votes}        
        //} else {
          //return quote;
       // }
      //})
      //return newState;

      case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index]

        if (quote.votes > 0) {

          return [
            ...state.slice(0, index),
            Object.assign({}, quote, {votes: quote.votes -= 1}),
            ...state.slice(index + 1)
          ];  
        } 
        
        return state;
      
//can also do
      //case 'DOWNVOTE_QUOTE':
      //newState = state.map(quote => {
        //if (quote.id === action.quoteId && quote.votes > 0) {
          //return {...quote, votes: --quote.votes}        
        //} else {
          //return quote;
       // }
      //})
      //return newState;

    default:
      return state;    

  }
  
}
