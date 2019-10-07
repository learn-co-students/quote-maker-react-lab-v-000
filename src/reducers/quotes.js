//import uuid from 'uuid';

export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(element => element.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      let newArr = []
      state.forEach(function(element) {
        if (element.id === action.quoteId) { element.votes += 1 };
        newArr.push(element)
      });
      return newArr;

    case "DOWNVOTE_QUOTE":
      const idx = state.findIndex(element => element.id === action.quoteId);
      function downvote(object) {
        if (object.votes !== 0) {
          object.votes -= 1;
        }
        return object.votes;
      }

      const downvotedObject = Object.assign(state[idx], { votes: downvote(state[idx]) });
      return [...state.slice(0, idx), downvotedObject, ...state.slice(idx + 1)]

    default:
      return state;
  }
}
