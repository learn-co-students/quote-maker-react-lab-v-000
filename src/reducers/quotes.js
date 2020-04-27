import uuid from "uuid";

export default (state = [], action) => {
  let idx;
  switch(action.type){

    case "ADD_QUOTE":
    return[
      ...state,
      {
        id:   action.quote.id,
        votes: 0,
        content: action.quote.content,
        author: action.quote.author
      }
    ]

    case "REMOVE_QUOTE":
    return{
    quote: state.filter(function(value){
      return action.quote.id != value.id
        })
      }

    }

  return state;
  }
