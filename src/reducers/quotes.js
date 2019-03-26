export default (state = [], action) => {
	let idx;
 
	switch (action.type) {
	
	case 'ADD_QUOTE':
      return [...state, { id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: action.quote.votes }];

    case "REMOVE_QUOTE":
      idx = state.indexOf(action);
      const newState = state
      return newState.splice(idx, 1)

    case 'UPVOTE_QUOTE':
      idx = state.indexOf(action);
      return state;

    case 'DOWNVOTE_QUOTE':
      idx = state.indexOf(action);
      return [...state];

 
    default:
      return state;

	}
};
