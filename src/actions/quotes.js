// TODO: Create action creators as defined in tests
import uuid from "uuid";

export function addQuote(quote) {
    return {
      type: "ADD_QUOTE",
        quote: Object.assign({id: uuid()}, quote)
    }
  }

export function removeQuote(ID) {
    return {
        type: "REMOVE_QUOTE",
        quoteId: ID
    }
}

export function upvoteQuote(ID) {
    return {
        type: "UPVOTE_QUOTE",
        quoteId: ID
    }
}

export function downvoteQuote(ID) {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId: ID
    }
}