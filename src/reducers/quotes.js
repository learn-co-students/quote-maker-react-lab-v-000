export default (state = [], action) => {

  let index;                     //declare index & quote variables but do not set 
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':   
      return state.concat(action.quote)  //this will add the quote & make copy return the new state array
             
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId) //go through state & return quotes whose id's don't equal quoteId that you want removed


    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)  //set index to index of quote.id === quoteId passed in
      quote = state[index]                                         //set quote to state at the index above

      return [
        ...state.slice(0, index),            //returns copy of state array from beg thru the index quote
        //Object.assign({}, quote, {votes: quote.votes += 1 }),      //Object.assign or ...spread both 
        {...quote, votes: quote.votes += 1},   //make copy of the quote object. Then adjust votes total
        ...state.slice(index + 1)             //take the copy of state array and add in copy of the rest   
      ]                                       //of the orig state array starting after the index quote
                                              //net effect is a new state array w/updated vote totals

      case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId)   //set index to index of quote.id === quoteId passed in
        quote = state[index]                                            //set quote to state at the index above

        if(quote.votes > 0) {                       //don't do anything if votes =< 0
          return [
            ...state.slice(0, index),                 //returns copy of state array from beg thru the index quote
            //Object.assign({}, quote, {votes: quote.votes -= 1 }),      //Object.assign or ...spread both
            {...quote, votes: quote.votes -= 1 },      //make copy of the quote object. Then adjust votes total
            ...state.slice(index + 1)                  //take the copy of state array and add in copy of the rest  
          ]                                            //of the orig state array starting after the index quote 
        }          
        return state;

      default:
        return state 
      }            
    }  

      

  
        
       
  

