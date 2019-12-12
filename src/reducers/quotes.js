import uuid from 'uuid';

export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      const id = uuid();
      return [...state, { id: id, 
        content: action.payload.content, 
        author: action.payload.author
      }];
    case 'REMOVE_QUOTE':
      return state;
    case 'UPVOTE_QUOTE':
      return state;
    case 'DOWNVOTE_QUOTE':
      return state;
    default:
      return state;
  }
}
