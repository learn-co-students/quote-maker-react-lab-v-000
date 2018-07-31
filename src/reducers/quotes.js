export default (state = [], action) => {

  switch (action.type) {

    case "ADD_QUOTE": {
      return [ ...state, action.quote ];
    }

    case "REMOVE_QUOTE": {
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      return [ ...state.slice(0, idx), ...state.slice(idx+1) ];
    }

    case "UPVOTE_QUOTE": {
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      let quote = Object.assign({}, state[idx], {votes: ++state[idx].votes});
      return [ ...state.slice(0, idx), quote, ...state.slice(idx+1) ];
    }

    case "DOWNVOTE_QUOTE": {
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      let quote = Object.assign({}, state[idx], {votes: (state[idx].votes===0 ? 0 : --state[idx].votes)});
      return [ ...state.slice(0, idx), quote, ...state.slice(idx+1) ];
    }

    default: {
      return state;
    }
  }
}
