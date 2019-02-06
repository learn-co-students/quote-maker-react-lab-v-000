import * as actionTypes from './types'

export function addQuote(quote){
    return {
        type: actionTypes.ADD_QUOTE,
        quote
    }
}

export function removeQuote(quoteId){
    return{
        type: actionTypes.REMOVE_QUOTE,
        quoteId
    }
}

export function upvoteQuote(quoteId){
    return{
        type: actionTypes.UPVOTE_QUOTE,
        quoteId
    }
}

export function downvoteQuote(quoteId){
    return{
        type: actionTypes.DOWNVOTE_QUOTE,
        quoteId
    }
}