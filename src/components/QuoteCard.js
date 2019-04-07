import React from 'react';

const QuoteCard = ( { quote, removeQuote, upvoteQuote, downvoteQuote }) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{ quote.content }</p>
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button onClick={() => upvoteQuote(quote.id)}
            type="button"
            className="btn btn-primary"

          >
            Upvote
          </button>
          <button onClick={() => downvoteQuote(quote.id)}

            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button onClick={() => removeQuote(quote.id)}

            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
