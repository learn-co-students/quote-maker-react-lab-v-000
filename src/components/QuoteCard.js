import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.content}</p>
          <footer>- author <cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            onClick={props.upvoteQuote(props.id)}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={props.downvoteQuote(props.id)}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            onClick={props.removeQuote(props.id)}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
