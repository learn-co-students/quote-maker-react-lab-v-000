import uuid from 'uuid'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':

      const quote = {
        id: uuid(),
        content: action.quote.content,
        author: action.quote.author
      };

      return { ...state, quotes: [...state.quotes, quote] };

    case 'REMOVE_QUOTE':
      return {quotes: state.quotes.filter(quote => quote.id !== action.id)};

    default:
      return state;
  }
}
