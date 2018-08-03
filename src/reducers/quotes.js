export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return [{...state[0],
              votes: state[0].votes + 1}]

    case 'DOWNVOTE_QUOTE':
      if(state[0].votes !== 0) {
        return [{...state[0],
                votes: state[0].votes - 1}]
      }
    }

    return state;
}
