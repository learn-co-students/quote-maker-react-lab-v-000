import Quotes from "../containers/Quotes";

export default (state = [], action) => {
  let newState;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    
    case 'UPVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes += 1 }
        } else {
          return quote;
        }
      })
      return newState;
      // index = state.findIndex(quote => quote.id === action.quoteId)
      // quote = state[index];
      // console.log("quote", quote)
      // newState = {...quote, votes: quote.votes += 1}
      // return [...state.slice(0, index), newState, ...state.slice(index + 1)]
      
      
    case 'DOWNVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return { ...quote, votes: quote.votes -= 1}
        } else {
          return quote;
        }
      })
      return newState;
      // // index = state.findIndex(quote => quote.id === action.quoteId)
      // quote = state[index];
      // if (quote.votes === 0 || !quote.votes) {
      //   return state
      // } else {
      //   newState = { ...quote, votes: quote.votes -= 1 }
      //   return [newState]
      // }

    default:
      return state;
  }

}
