import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          <p>{qoute.content}</p>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
          <footer>- author <cite title="Source Title">{qoute.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => upvoteQuote(quote.id)}
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            onClick={() => downvoteQuote(quote.id)}
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            onClick={() => removeQuote(quote.id)} 
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
         <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
