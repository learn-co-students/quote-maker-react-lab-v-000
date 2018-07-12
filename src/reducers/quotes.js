export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':

      return state.concat(action.quote)
      
    case 'REMOVE_QUOTE':
      
      return state.filter((quoteObj) => {
        return quoteObj.id !== action.quoteId
      });

    case 'UPVOTE_QUOTE':
      
      const indexToUpvote = state.findIndex((quoteObj) => {
        return quoteObj.id === action.quoteId;
      })

      const newlyUpvotedQuote = {
        ...state[indexToUpvote],
        votes: state[indexToUpvote].votes + 1
      }

      return [
        ...state.slice(0, indexToUpvote),
        newlyUpvotedQuote,
        ...state.slice(indexToUpvote + 1)
      ]
      
    case 'DOWNVOTE_QUOTE':

      const indexToDownvote = state.findIndex((quoteObj) => {
        return quoteObj.id === action.quoteId;
      })

      const newlyDownvotedQuote = {
        ...state[indexToDownvote],
        votes: (state[indexToDownvote].votes === 0 ? state[indexToDownvote].votes : state[indexToDownvote].votes - 1 )
      }

      return [
        ...state.slice(0, indexToDownvote),
        newlyDownvotedQuote,
        ...state.slice(indexToDownvote + 1)
      ]
  
    default:
      return state;
  }
}