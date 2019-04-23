import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{this.props.quote.content}</p>
          <footer>- author <cite title="Source Title">{this.props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            onclick={this.props.upvoteQuote}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onclick={this.props.downvoteQuote}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            onclick={this.props.removeQuote}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
