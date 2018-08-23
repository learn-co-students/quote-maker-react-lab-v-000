
export default (state = [], action) => {
    let idx;
    switch (action.type) {
        
        case "ADD_QUOTE":
          return [...state, action.quote];
        
        case "REMOVE_QUOTE":
          idx = state.findIndex(quote => quote.id === action.quoteId);
          // console.log('remove quote : ', idx, ' | ', state.slice(idx, 1))
          return [...state.slice(0, idx), ...state.slice(idx + 1)];

        case "UPVOTE_QUOTE":
          idx = state.findIndex(quote => quote.id === action.quoteId);
          // console.log('upvote quote : ', idx, ' | ', state.slice(idx, 1))
          // console.log('upvote quote : ', state[idx])
          return [...state.slice(0, idx),
            Object.assign({}, state[idx], { votes: state[idx].votes += 1 }),
            ...state.slice(idx + 1)];
        
        case "DOWNVOTE_QUOTE":
          idx = state.findIndex(quote => quote.id === action.quoteId);
          // console.log('downvote quote : ', idx, ' | ', state.slice(idx, 1))
          let newVotes = state[idx].votes;
          if (newVotes > 0) { newVotes -= 1 }
          return [...state.slice(0, idx),
            Object.assign({}, state[idx], { votes: state[idx].votes = newVotes }),
            ...state.slice(idx + 1)];

        default:
          return state;
    }
    
}
