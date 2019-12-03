import React from 'react';
import { upvoteQuote }  from '../actions/quotes';
import { downvoteQuote }  from '../actions/quotes';


const handleOnUp = (id, event) => {
    event.preventDefault();
    upvoteQuote(id)
  }

const handleOnDown = (id, event) => {
    event.preventDefault();
    downvoteQuote(id)
  }

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
            onClick={(event) => handleOnUp(props.quote.id, event)}
          >Upvote</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(event) => handleOnDown(props.quote.id, event)}
          >Downvote</button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
