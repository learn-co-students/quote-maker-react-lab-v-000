import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quoteInfo.content}</p>
          <footer>- author <cite title="Source Title">{props.quoteInfo.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.upvoteCB.bind(this, props.quoteInfo.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.downvoteCB.bind(this, props.quoteInfo.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.removeQuoteCB.bind(this, props.quoteInfo.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quoteInfo.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
