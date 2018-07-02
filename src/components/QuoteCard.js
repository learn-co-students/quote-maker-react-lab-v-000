import React from 'react';

const QuoteCard = ({quote, upvoteQuote, downvoteQuote, removeQuote, id}) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{quote.content}</p>
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={(event) => upvoteQuote(id)}>
            Upvote
          </button>
          <button type="button" className="btn btn-secondary" onClick={(event) => downvoteQuote(id)}>
            Downvote
          </button>
          <button type="button" className="btn btn-danger" onClick={(event) => removeQuote(id)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {quote.votes}
      </div>
    </div>
  </div>;

export default QuoteCard;
