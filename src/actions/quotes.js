export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    payload: quote
  }
}

export function removeQuote(quote){
  return {
    type: "REMOVE_QUOTE",
    payload: quote
  }
}


export function upVote(quote){

  return {
    type: "UPVOTE",
    payload: quote
  }
}

export function downVote(quote){

  return {
    type: "DOWNVOTE",
    payload: quote
  }
}
