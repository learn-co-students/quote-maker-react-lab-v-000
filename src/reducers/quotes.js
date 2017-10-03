import uuid from 'uuid';

const id = uuid();

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return state.map( (quote, quoteId) => {
          if(quote.id !== action.quoteId) {
              return quote;
          }
          return {
              ...quote,
              votes: quote.votes + 1
          };
      });
    case 'DOWNVOTE_QUOTE':
    return state.map( (quote, quoteId) => {
        if(quote.id !== action.quoteId) {
            return quote;
        } else if(quote.votes === 0) {
            return quote;
        } else {
          return {
            ...quote,
            votes: quote.votes - 1
        };
      }
    });
    default:
      return state;
  }
}

// const review = Object.assign({}, action.review, {id:cuidFn()});
// return {...state, reviews: state.reviews.concat(review)}
