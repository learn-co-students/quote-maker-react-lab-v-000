// import uuid from "uuid";
// const id = uuid();

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      console.log(action.quoteId);
      // const quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      // console.log("quoteIndex:", quoteIndex);
      let newarr = state.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes += 1;
        }
        return quote;
      });
      return newarr;
    case "DOWNVOTE_QUOTE":
      console.log(action.quoteId);
      // const quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      // console.log("quoteIndex:", quoteIndex);
      let newarray = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes >= 1) {
          quote.votes -= 1;
        }
        return quote;
      });
      return newarray;
    // state.slice(quoteIndex - 1, 0, state[quoteIndex]);
    // console.log("quoteIndex:", quoteIndex);
    // // debugger;
    // return state.concat(action.quote);

    // console.log(state);

    default:
      state;
  }
  return state;
};
