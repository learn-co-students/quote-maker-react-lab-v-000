import quotes from '../actions/quotes'

export default (state = [], action) => {
  //return state;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.author];

    default:
      return state;
  }
}
