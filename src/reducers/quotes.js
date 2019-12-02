import uuid from 'uuid';

export default (state = [], action) => {
	let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote ];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.quoteId  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE QUOTE':
      idx = state.findIndex(quote => quote.quoteId  === action.id)
     return {...state, votes: action.vote + 1} ;

    case 'DOWNVOTE QUOTE':
     idx = state.findIndex(quote => quote.quoteId  === action.id)
    return {...state, votes: action.quote.vote };

    default:
      return state;
  }
}
