export default (state = [], action) => {

  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteID);

    //case 'UPVOTE_QUOTE':

  //  return;

  //  case 'DOWNVOTE_QUOTE';

  //  return;

  return state;
    default:
  return state;
  }
}
