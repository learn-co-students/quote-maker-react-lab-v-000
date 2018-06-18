import uuid from 'uuid';

export default (state = [], action) => {

  let index

  let quote

  switch (action.type){

    case 'ADD_QUOTE':
      return Object.assign(state, state.concat({id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: 0}));

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

      // const quoteId = state.indexOf(obj => obj.id === action.quoteId)
      // ----
      // const quoteObj = state.filter(obj => obj.id === action.quoteId)
      // const quoteIndex = state.indexOf(quoteObj)
      //
      // return Object.assign([], state.slice(0, quoteIndex), state.slice(quoteIndex +1));

    case 'UPVOTE_QUOTE':
      // const quote = state.filter(quote => quote.id === action.quoteId)[0]
      // quote.votes += 1
      // return Object.assign(state, quote)
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];
        if (quote.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, quote, { votes: quote.votes -= 1 }),
            ...state.slice(index + 1)
          ];
        }
        return state;

    default:
      return state
  }
  // return state;
}
