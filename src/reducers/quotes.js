export default (state = [], action) => {
  let quote;
  let index;
  switch(action.type) {
    case 'ADD_QUOTE':
      // Merges current value of state and quote provided in action into new array
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      const quotes = state.filter(quote => quote.id !== action.quoteId)
      return quotes
    case 'UPVOTE_QUOTE':
      // Find index of the quote w/ the id that matches the quoteId provied in the action in
      // the state array
      index = state.findIndex(quote => quote.id === action.quoteId);
      // set quote w/ that index equal to value of quote
      quote = state[index];
      return [
        // Get all quotes from first quote to quote that matches index
        ...state.slice(0, index), 
        // Use Object.assign() to create new quote object w/ incremented vote using quote variable
        Object.assign({}, quote, { votes: quote.votes += 1 }), 
        // Add remaining quotes that come after the index that matches value of index
        // .slice() returns all elements after 1st argument if 2nd argument isn't provided
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;  
    default:
      return state;
  }
}