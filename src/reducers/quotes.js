import uuid from 'uuid';

export default (state = [], action) => {
	let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote ];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.quoteId  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      const quoteOb = state.find(quote => quote.quoteId  === action.id)
      quoteOb.votes = quoteOb.votes + 1 
     return [...state];

    case 'DOWNVOTE_QUOTE':
     const voteOb = state.find(quote => quote.quoteId  === action.id)
     if (voteOb.votes > 0) {
     voteOb.votes = voteOb.votes - 1 }
    return [...state];

    default:
      return state;
  }
}
