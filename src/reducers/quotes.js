import uuid from 'uuid';

export default (state = [], action) => {
	let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, action };

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    //case 'UPVOTE QUOTE'

     //return ;

    //case 'DOWNVOTE QUOTE'

    //return;

    default:
      return state;
  }
}
