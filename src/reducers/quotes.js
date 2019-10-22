import quotes from '../actions/quotes'

export default (state = [], action) => {
  //return state;
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return addQuote();

    default:
      return state;
  }
}
