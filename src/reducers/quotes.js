import uuid from 'uuid';

function quotes(state = [], action){
  let q
  let index
  switch(action.type){
    case "ADD_QUOTE":
      // const {author, content, id, upvotes, downvotes} = action.quote;
      // const quote {author: , content: , id: , upvotes: , downvotes: }
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      const quotes = state.filter(quote => quote.id !== action.quoteId);
      return quotes;
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      q = state[index]
      return [...state.slice(0, index),
          Object.assign({}, q, { votes: q.votes += 1 }),
          ...state.slice(index + 1)];
    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      q = state[index]
      return q.votes > 0 ? [...state.slice(0, index),
                Object.assign({}, q, { votes: q.votes -= 1 }),
                ...state.slice(index + 1)] : state;
      default:
        return state;
  }
}

export default quotes;
