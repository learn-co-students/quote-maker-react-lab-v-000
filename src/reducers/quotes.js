// import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

export default (state = [], action) =>  {
  let index;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      index = state.indexOf(action.quote.id)
      return {
        ...state,
        authors: [
          state.slice(0, index),
          state.slice(index +1),
        ]
      }
    default:
      return state
  }
}
