import uuid from 'uuid';

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      
      const quote = {
        id: (action.quote.id!== null)? action.quote.id:uuid(),
        content:action.quote.content,
        author:action.quote.author,
        votes: (action.quote.votes!== null)? action.quote.votes:0
      }
      state.push(quote)
      debugger
      return state

    case 'REMOVE_QUOTE':
      
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      
      return state.map(quote=> {(quote.id === action.quoteId)?quote.votes+=1:quote.votes+=0; return quote})

    case 'DOWNVOTE_QUOTE':
      
      return state.map(quote=> {(quote.votes ===0)? quote.votes=0:(quote.id === action.quoteId)?quote.votes-=1:quote.votes+=0; return quote})

    default:
      return state;
  }
}

