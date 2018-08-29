import React from "react";

const QuoteCard = ({ quote, removeQuote, upvoteQuote, downvoteQuote }) => (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          <p>{quote.content}</p>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
          <footer>
            author - <cit title="Source Title">{quote.author}</cit>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => upvoteQuote(quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downvoteQuote(quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeQuote(quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>
);

export default QuoteCard;
