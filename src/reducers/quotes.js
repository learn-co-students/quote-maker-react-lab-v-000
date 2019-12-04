
export default (state = [], action) => {

	let idx;
  
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote ];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      const quoteOb = state.find(quote => quote.id  === action.quoteId)
      quoteOb.votes = quoteOb.votes + 1 
     return [...state];

    case 'DOWNVOTE_QUOTE':
     const voteOb = state.find(quote => quote.id  === action.quoteId)
     if (voteOb.votes > 0) {
     voteOb.votes = voteOb.votes - 1 }
    return [...state];

    default:
      return state;
  }
}
