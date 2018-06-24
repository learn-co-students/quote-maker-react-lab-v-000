import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      const id = uuid()
      const quote = Object.assign({}, action.quote, id: id)
      return state.concat(quote);
    case 'REMOVE_QUOTE':
      const removalInd = state.indexOf(action.quoteId);
      return [...state.slice(0, removalInd),
      ...state.slice(removalInd + 1)];

    default:
      return state;
  }
}
