import React from 'react';
import { removeQuote,upvoteQuote,downvoteQuote } from '../actions/quotes';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{console.log(props)}</p>
          <footer>- author <cite title="Source Title">author here</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={upvoteQuote(props.quote)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={downvoteQuote(props.quote)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={removeQuote(props.quote)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote}</div>

      </div>
    </div>
  </div>;

export default QuoteCard;
