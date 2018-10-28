export default (state = [], action) => {
    let copyState
    switch(action.type) {
        case("ADD_QUOTE"):
            return (state.concat(action.quote))
        case("REMOVE_QUOTE"):
            copyState = [...state]
            return copyState.filter( x => x.id !== action.quoteId )
        case("UPVOTE_QUOTE"):
            copyState = state.filter( x => x.id === action.quoteId)
            let x = {...copyState[0], votes: copyState[0].votes + 1}
            let y = [...state.filter( x => x.id !== action.quoteId)]
            y.push(x)
            return y
        case("DOWNVOTE_QUOTE"):
            copyState = state.filter( x => x.id === action.quoteId)
            if(copyState[0].votes >= 1) {
                x = {...copyState[0], votes: copyState[0].votes - 1}
                y = [...state.filter( x => x.id !== action.quoteId)]
                y.push(x)
                return y
            }
            
        default:
            return state
    }
}
