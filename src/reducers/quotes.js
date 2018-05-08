export default (state = [], action) => {
    let index
    let quote
    switch(action.type){
    case "ADD_QUOTE":
        return [].concat(state, action.quote);
    case "REMOVE_QUOTE":
        const quotes = state.filter(quote=>quote.id !== action.quoteId);
        return quotes;
    case "UPVOTE_QUOTE":
        index = state.findIndex(q => q.id === action.quoteId);
        quote = state[index]
        // quote.setState({
        //     votes: votes + 1});
        return [
            ...state.slice(0, index),
            Object.assign({}, quote, {votes: quote.votes += 1}),
            ...state.slice(index+1)
            ]
            
    case "DOWNVOTE_QUOTE":
        index = state.findIndex(q => q.id === action.quoteId);
        quote = state[index]
        if (quote.votes > 0) {
            return [
            ...state.slice(0, index),
            Object.assign({}, quote, {votes: quote.votes -= 1}),
            ...state.slice(index+1)
            ]
        } else {
            return state;
        }
        
    
    default:    
        return state;
    }
}