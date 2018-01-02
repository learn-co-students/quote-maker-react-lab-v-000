import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
      case 'ADD_QUOTE':
        const quote = Object.assign({}, action.quote);
        debugger;
        return [].concat(state, quote);

      case 'REMOVE_QUOTE':
          // let idx = state.indexOf(action.quoteId);
          // return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length));
          return state.filter(quote => quote.id !== action.quoteId);
      case 'UPVOTE_QUOTE':
          let upvoteIdIndex = state.findIndex(i => i.id === action.quoteId);
          Object.assign({}, ...state, {votes: state[upvoteIdIndex].votes++});
          return state;
      case 'DOWNVOTE_QUOTE':
          let downvoteIdIndex = state.findIndex(i => i.id === action.quoteId);
          let updatedVotes = state[downvoteIdIndex].votes ? state[downvoteIdIndex].votes-- : 0;

          Object.assign({}, ...state, {votes: updatedVotes});
          return state;
      default:
        return state;
  }
}