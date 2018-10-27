import React from 'react';

const QuoteCard = ({id, content, author, removeQuote, upvoteQuote, downvoteQuote}) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{content}</p>
          <footer>- author <cite title="Source Title">{author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={upvoteQuote}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={downvoteQuote}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={removeQuote}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
