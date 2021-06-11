import uuid from 'uuid'
export default (state = [], action) => {
    let quote;
    let idx;
    switch(action.type){
        case "ADD_QUOTE":
            // add id property to quote if it doesnt have one already (tests suite create ids for quote obj)
            quote = !action.quote.id? {...action.quote, id:uuid()}:{...action.quote};
            return state.concat(quote);
        case "REMOVE_QUOTE":
            // console.log(action.quoteId);
             return state.filter((quote)=>quote.id !== action.quoteId);
        case "UPVOTE_QUOTE":
            // debugger;
            idx = state.findIndex(quote=>quote.id===action.quoteId);
            quote = state[idx];
            return [...state.slice(0, idx), 
                {...quote, votes:quote.votes+1}, 
                ...state.slice(idx+1)];
        case "DOWNVOTE_QUOTE":
            idx = state.findIndex(quote=>quote.id===action.quoteId);
            quote = state[idx];
            let votesResult = quote.votes>0?quote.votes-1:quote.votes;
            return [...state.slice(0, idx), 
                {...quote, votes:votesResult}, 
                ...state.slice(idx+1)];
        default:
            return state;
    }
    
}
