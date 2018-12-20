export const addQuote = (quote) => {
    return { type: "ADD_QUOTE",
             quote
         }
}

export const removeQuote = quoteID => {
    return { type: "REMOVE_QUOTE",
             quoteId: quoteID
           }
}

export const upvoteQuote = quoteID => {
    return { type: "UPVOTE_QUOTE",
             quoteId: quoteID
           }
}

export const downvoteQuote = quoteID => {
    return { type: "DOWNVOTE_QUOTE",
             quoteId: quoteID
           }
}
