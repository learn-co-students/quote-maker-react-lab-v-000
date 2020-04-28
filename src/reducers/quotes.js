import uuid from "uuid";

export default (state = [], action) => {
  let idx;
  switch(action.type){

    case "ADD_QUOTE":
      return[
        ...state,
        {
          id:   action.quote.id,
          votes: action.quote.votes,
          content: action.quote.content,
          author: action.quote.author
        }
      ]

    case "REMOVE_QUOTE":
      return state.filter(function(value){
        return action.quoteId != value.id
      })


    case "UPVOTE_QUOTE":
      const qt = state.find(quote => quote.id === action.quoteId)
      console.log(qt.votes)
      qt.votes += 1
      console.log(qt)
      console.log(action.quoteId)
      return [qt]



    case "DOWNVOTE_QUOTE":
      const qte = state.find(quote => quote.id === action.quoteId)
      if (qte.votes > 0) {
        qte.votes -=1
      }
      return [qte]


  return state;

  default:
  return state;
  }
}
