import uuid from 'uuid';
const id = uuid();
console.log(id);

export default function quotesReducer(state = {
    quotes: [] }, action) {
    console.log(action);
  
    switch(action.type) {

      case 'ADD_QUOTE':
       return state.concat(action.quote);

      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);

      case 'UPVOTE_QUOTE':
       return(state.quote.length += 1)

      case 'DOWNVOTE_QUOTE':
        return(state.quote.length += 0)


      default:
      console.log(state);
        return state;
  }
}

