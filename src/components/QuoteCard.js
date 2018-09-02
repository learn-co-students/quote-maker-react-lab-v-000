import React from 'react';
import { connect } from 'react-redux';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

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
            type="button"
            className="btn btn-primary"
            onClick={props.upvoteQuote}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.downvoteQuote}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.removeQuote}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.votes}</div>
      </div>
    </div>
  </div>;

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    },
    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    }
  }
}

export default connect(null, mapDispatchToProps)(QuoteCard);
