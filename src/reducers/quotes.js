import uuid from "uuid";

export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
    return[...state,action.quote,action.author]
  }
  return state;
}
