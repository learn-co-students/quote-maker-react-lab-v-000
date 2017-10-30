
export default function manageQuotes(state = [], action){
      console.log(action)
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
    debugger
      return state.filter((q) => q.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      return { vote: state[state.indexOf(action.quoteId)].vote + 1}

    case 'DOWNVOTE_QUOTE':
      return {vote: action.quote.vote - 1}

    default:
      return state;
  }
};
