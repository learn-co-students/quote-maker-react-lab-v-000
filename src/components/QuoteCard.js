import React from 'react';


const QuoteCard = ({quote, removeQuote, upvoteQuote, downvoteQuote}) =>  //set QuoteCard var to quote & all actions in card
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{quote.content}</p>           {/*render quote content*/}
<footer>- author <cite title="Source Title">{ quote.author}</cite></footer>   {/*render quote author*/}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => upvoteQuote(quote.id)}     //set up on click for upvote
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downvoteQuote(quote.id)}       //set up on click for downvote
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeQuote(quote.id)}         //set up on click for remove quote
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: { quote.votes}</div>   {/*render quote's votes*/}
      </div>
    </div>
  </div>;

export default QuoteCard;
