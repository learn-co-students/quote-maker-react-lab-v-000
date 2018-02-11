export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => {
        return quote.id !== action.quoteId;
      })
    case "UPVOTE_QUOTE":
      const clonedState = [...state];
      const quoteToBeUpvoted = clonedState.find(quote => quote.id === action.quoteId);
      quoteToBeUpvoted.votes += 1; //changes internal value of the clonedObj
      return clonedState;
    default:
      return state;
  }
}

// var arr = [{id: 1, name: "kevin", votes:0},{id: 2, name: 'jared', votes:0}, {id: 3, name: 'chris', votes:0}]
// var array1 = [5, 12, 8, 130, 44];
//
// // var found = array1.find(function(element) {
// //   return element > 10;
// // });
//
// var indexOf8 = array1.indexOf(8) //2
// var valueof8 = array1[indexOf8] //8
//
// //splice out the index of 8
// var spliceOut8 = array1.splice(indexOf8, 1)
// spliceOut8 // [8]
//
// array1 // [5,12,130,44]
//
// var newArr = [...array1, (valueof8) + 2]
//
// newArr
