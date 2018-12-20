import uuid from 'uuid';
const quotes = (state = [], action) => {
    switch (action.type) {
        case "ADD_QUOTE":
            return [...state, action.quote ]

        case "REMOVE_QUOTE":
            return state.filter(quote => quote.id !== action.quoteId);

        case "UPVOTE_QUOTE":
            const upVotedQuote = state.find(quote => quote.id === action.quoteId);
            upVotedQuote.votes += 1;
            return [ upVotedQuote ];

        case "DOWNVOTE_QUOTE":
            const downVotedQuote = state.find(quote => quote.id === action.quoteId);
            if (downVotedQuote.votes === 0){
                return [downVotedQuote];
            } else {
                downVotedQuote.votes -= 1;
                return [ downVotedQuote ];
            }

        default:
        return state;
    }
}

export default quotes
