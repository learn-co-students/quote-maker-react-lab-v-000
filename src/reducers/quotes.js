export default (state = [], action) => {

    switch (action.type){
      case 'ADD_QUOTE':
       return [...state, action.quote];
       break;

     case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      break;

      case 'UPVOTE_QUOTE':
        let newState = state.map(quote =>
          {if (quote.id === action.quoteId){
            return {...quote, votes: ++quote.votes }} else {
              {return quote}
            }
          })
        return newState;

        case 'DOWNVOTE_QUOTE':
          let newerState = state.map(quote =>
            {if (quote.id === action.quoteId && quote.votes > 0){
              return {...quote, votes: --quote.votes }} else {
                {return quote}
              }
            })
          return newerState;

    default:
      return state;
      }
}
