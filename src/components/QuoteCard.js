import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.upvoteQuote.bind(this, props.quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.downvoteQuote.bind(this, props.quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.removeQuote.bind(this, props.quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div><br />
        Votes: {props.quote.votes}
      </div>
    </div>
  </div>;

export default QuoteCard;
