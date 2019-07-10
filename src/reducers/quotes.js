/*import uuid from 'uuid';
*/
export default (state = [], action) => {

  let index;
  let quote;

  switch(action.type) {
    /*
    case 'ADD_QUOTE':
      return state.concat({...action.quote, id: uuid()});
    */

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId)
        return [
          ...state.slice(0, index),
          {...state[index], votes: state[index].votes += 1},
          ...state.slice(index + 1)
        ];

    case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index]
        if (quote.votes > 0) {
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
