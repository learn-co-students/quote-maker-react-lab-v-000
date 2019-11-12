export default (state = [], action) => {
  console.log(action);
  switch (action.type) {

   
    case 'ADD_QUOTE':
  
      console.log("Add Quotes");
        
    case 'removeQuote':
      console.log("remove quote and quote_id");
        type: 
        
    case 'upVoteQuote':
      console.log("upvote QUote and quote ID");

      
    case 'downvoteQuote':
      console.log("DownVote_qoute and quote_ID");

    default:
      return state;
  }
}