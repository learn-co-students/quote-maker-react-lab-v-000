
export default (state = [], action) => {
  let index;
  let quote;
  switch(action.type) {
    case 'ADD_QUOTE':
    return state.concat(action.quote);

    case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
     quote = state.find(quote => quote.id === action.quoteId);

    return [
       {...quote, votes: quote.votes += 1}
    ]
    case 'DOWNVOTE_QUOTE':
     index = state.findIndex(quote => quote.id === action.quoteId);
     quote = state[index];

     if(quote.votes > 0){
       return [
          {...quote, votes: quote.votes -=1}
       ]
     }
       return state

       default:
       return state;
     }
   }
