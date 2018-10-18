// TODO: Create action creators as defined in tests
export const addQuote = quote => {
    return {
        type: "ADD_QUOTE",
        quote
    };
};

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}