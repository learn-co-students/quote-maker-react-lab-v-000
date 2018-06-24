import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      const id = uuid()
      const quote = Object.assign({}, {content: action.quote.content, author: action.quote.author, id: id, votes: 0})
      return state.concat(quote);
    case 'REMOVE_QUOTE':
      const removalInd = state.indexOf(action.quoteId);
      return [...state.slice(0, removalInd),
      ...state.slice(removalInd + 1)];

    default:
      return state;
  }
}
