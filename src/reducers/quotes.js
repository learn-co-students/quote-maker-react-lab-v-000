import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        {
          id: uuid(),
          content: action.content,
          author: action.author
        }
      ]
    default:
      return state;
  }
}
