import uuid from 'uuid'

export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      //reminder: state is an array of quote objects
      // gotta grab the index first
      index = state.findIndex(quote => quote.id === action.quoteId)
      //then get the exact quote object using the index
      quote = state[index]

      //return the state array where we spread up to the index
      return [
        ...state.slice(0, index),
      //then make an updated copy of the object we indexed
        Object.assign({}, quote, { votes: quote.votes += 1 }),
      //then spread the rest of the state after the object we indexed
        ...state.slice(index + 1)
      ]

     //looks like this state = [..."front of state","mod object", ...'rest of state' ]

    case 'DOWNVOTE_QUOTE':
      //get the obj you're looking for :)
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      //get portions of the state b4 and after the indexed object that you are modifying
      let before = state.slice(0, index)
      let after = state.slice(index + 1)

      if (quote.votes > 0) {
        return [
          ...before,
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...after
        ];
      }

      return state;

    default:
      return state;
  }


  return state;
}
