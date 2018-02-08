export default (state = [], action) => {
	debugger;
  switch (action.type) {
  case "ADD_QUOTE":
    return [].concat(state, action.quote)
  case "REMOVE_QUOTE":
    let idx = state.indexOf(action.quoteId)
    return state.filter(({ id }) => id !== action.quoteId);
  case "UPVOTE_QUOTE":
  	let quote = state.find((obj) => { return obj.id === action.quoteId; });
  	quote.votes++;
  	return state.map(item => {if(item.id === quote.id) { item = quote;} return item; });
  case "DOWNVOTE_QUOTE":
  	quote = state.find((obj) => { return obj.id === action.quoteId; });
  	if(quote.votes !== 0) { quote.votes--; }
  	return state.map(item => {if(item.id === quote.id) { item = quote;} return item; });
  default:
    return state
  }
}