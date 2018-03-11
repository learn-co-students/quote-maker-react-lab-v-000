export default (state = [], action) => {

 switch(action.type){

   case 'ADD_QUOTE':
   return state.concat(action.quote)
   case 'REMOVE_QUOTE':
   return state.filter(quote=> quote.id !== action.quoteId);
   case 'UPVOTE_QUOTE':
    let quote = state.find(q => q.id === action.quoteId)
    quote.votes += 1;
    return state.filter(q => q.id!==action.quoteId).concat(quote);//first filter the array(state) and remove the current quote and then re add it with a new vote value
    case 'DOWNVOTE_QUOTE':
     quote = state.find(q => q.id === action.quoteId) //find the current quote
     if(quote.votes > 0){
    quote.votes -= 1; //reduce the value of vote by 1
    return state.filter(q => q.id !== action.quoteId).concat(quote);
    }
    return state;
   default:
   return state
 }

}
