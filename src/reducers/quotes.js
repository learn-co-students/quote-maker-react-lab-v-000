

export default (state = [], action) => {
  let idx;


  switch (action.type){
    case "ADD_QUOTE":

      return [...state, action.quote];

    case "REMOVE_QUOTE":

      idx = state.findIndex(x => x.id===action.quoteId);
        return [...state.slice(0, idx),
        ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(x => x.id===action.quoteId);
      const vote = state[idx].votes + 1;
      const upvote = {...state[idx], votes: vote}

      return [...state.slice(0, idx), upvote,
      ...state.slice(idx + 1)];

    case "DOWNVOTE_QUOTE":
    idx = state.findIndex(x => x.id===action.quoteId);
    if (state[idx].votes > 0){
      const vote2 = state[idx].votes - 1;
      const downvote = {...state[idx], votes: vote2}

      return [...state.slice(0, idx), downvote,
        ...state.slice(idx + 1)];
      } else {
        return state;
      }




    default: return state;
  }


}
