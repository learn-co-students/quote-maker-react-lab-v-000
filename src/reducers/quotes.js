import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {id: uuid(), content: action.quote.content, author: action.quote.author, votes: 0}]
    case 'REMOVE_QUOTE':
      console.log('state in remove quote', state)
      return [...state, state.filter(a => a.id !== action.quoteId)]
    // case 'UPVOTE_QUOTE':
    //   return [...state, action.type]
    // case 'DOWNVOTE_QUOTE':
    //   return [...state, action.type]
    default:
      return state;
  }
}
