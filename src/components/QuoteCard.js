import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {props.quote.content}
          {/* <p>{Render Quote Content}</p> */}

          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        Quotes: {props.quote.votes}
      </div>
    </div>
  </div>;

export default QuoteCard;
