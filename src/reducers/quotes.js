import { bindActionCreators } from "redux";

export default function quotes(state = [], action) {
  let idx;
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
     return [...state, {author: action.quote.author, content: action.quote.content, id: action.quote.id, votes: 0}]
     
     case "REMOVE_QUOTE":
     idx = state.findIndex(function(element) {
       return element.id === action.quoteId
     })
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
      
      case "UPVOTE_QUOTE":
      idx = state.findIndex(function(element) {
        return element.id === action.quoteId
      })
      quote = state[idx]
      return [...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx + 1)
      ]
      
      case "DOWNVOTE_QUOTE":
      idx = state.findIndex(function(element) {
        return element.id === action.quoteId
      })
      quote = state[idx]
      if (quote.votes > 0) {
      return [...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes -= 1}),
        ...state.slice(idx + 1)
      ]
     } else {
      return state;
     }
    default:
      return state;
  }
}


