export default (state = [], action) => {
  let index;
  let quote;


    switch (action.type) {

      case 'ADD_QUOTE':
       // console.log("add_quote", ...state,action.quote)
       // return state.concat(action.quote) alternate way to add quote to state
       return [...state, action.quote]

       case 'REMOVE_QUOTE':
       // console.log("remove_quote with action.quoteId of:", action.quoteId)
        // filter removes the quote object
        return state.filter(quote => quote.id !== action.quoteId)

       case 'UPVOTE_QUOTE':
       // find the index of the quote selected
        index = state.findIndex(quote => quote.id === action.quoteId);
        // store the quote based on object in state based on index in variable quote
        quote = state[index]
        // can use Object.assign in return instead of spread in line 23
          // Object.assign({}, quote, { votes: quote.votes += 1 }),
        return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes += 1},
        ...state.slice(index + 1)
      ];

      case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index]

        if (quote.votes > 0 ){
          return [
            ...state.slice(0, index),
            {...quote, votes: quote.votes -= 1},
            ...state.slice(index + 1)
          ];
        }
        return state;

      default:
      return state;
    }
}
