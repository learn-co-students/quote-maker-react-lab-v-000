export default (state = [], action) => {
	let idx;
  const newState = state;
 
	switch (action.type) {
	
	case 'ADD_QUOTE':
      return [...state, { id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: action.quote.votes }];

    case "REMOVE_QUOTE":
      idx = state.indexOf(action);
      return newState.splice(idx, 1)

    case 'UPVOTE_QUOTE':
      newState[0]["votes"] = newState[0]["votes"] + 1
      return newState;

    case 'DOWNVOTE_QUOTE':
        switch (newState[0]["votes"]) {
          case 0:
            return state;
            
          default:
            newState[0]["votes"] = newState[0]["votes"] - 1
            return newState;
        }
 
    default:
      return state;

	}
};
