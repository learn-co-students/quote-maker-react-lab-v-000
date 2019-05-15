// TODO: Create action creators as defined in tests

// here, we'll create the actions we need for the switch types used
// in the reducers

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote
    };
};

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    };
};

export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    };
};

export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    };
};
