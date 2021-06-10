import uuid from 'uuid'
export default (state = [], action) => {
    switch(action.type){
        case "ADD_QUOTE":
            let quoteInit= {...action.quote, votes:0}
            // add id property to quote if it doesnt have one already (tests suite create ids for quote obj)
            let quote = !action.quote.id? {...quoteInit, id:uuid()}: quoteInit;
            return state.concat(quote);
        case "REMOVE_QUOTE":
            console.log(state);
             return state.filter((quote)=>quote.id !== action.quote.id);
        default:
            return state;
    }
    
}
