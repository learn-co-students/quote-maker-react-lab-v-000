import uuid from "uuid"

// keys: id, content, author

export default (state = [], action) => {
  let idx
  switch (action.type){
    default:
      return state
      
    case "ADD_QUOTE":
      return [...state, { action.quote, id: uuid() }]

    
  }
}
