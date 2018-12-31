export default (state = [], action) => {
  let index
  let quote
  let qId

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      qId = action.quoteId
      return state.filter( obj => obj.id != qId)

    case "UPVOTE_QUOTE":
      index = state.findIndex( obj => obj.id == action.quoteId )
      quote = state[index]
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex( obj => obj.id == action.quoteId )
      quote = state[index]
      if (quote.votes < 1) {
        return state;
      } else {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
    }
}
