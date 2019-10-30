import uuid from 'uuid';
// const id = uuid();

export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      let arr = [...state].filter(quote => quote.id !== action.quoteId);
      return arr;

    case 'UPVOTE_QUOTE':
      let upvoted = state.map(quote => {
        if (quote.id === action.quoteId){
          return {...quote, ...quote.votes += 1}
        } else {
          return quote;
        }
      });
      return upvoted;

    case 'DOWNVOTE_QUOTE':
      let downvoted = state.map(quote => {
        if (quote.id === action.quoteId){
          if (quote.votes > 0) {
            return {...quote, ...quote.votes -= 1}
          } else {
            return quote;
          }
        } else {
          return quote;
        }
      });
      return downvoted;

    default:
        return state;
  }
  // return state;
}
