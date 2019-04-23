import React from 'react';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

const QuoteCard = props =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{this.content}</p>
          <footer>- author <cite title="Source Title">{this.author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            // onClick={}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            // onClick={}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            // onClick={}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {this.votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
