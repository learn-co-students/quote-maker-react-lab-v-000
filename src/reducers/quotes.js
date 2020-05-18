export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, 
        { id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: action.quote.votes} 
      ];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      const upvote = state.find(quote => quote.id === action.quoteId)
      upvote.votes += 1
      return [upvote]

    case 'DOWNVOTE_QUOTE':
      const downvote = state.find(quote => quote.id === action.quoteId)
      if (downvote.votes > 0) {
        downvote.votes -= 1
      }
      return [downvote]
      
    default:
      return state;
  }
}
