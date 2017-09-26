import React from 'react';
import { connect } from 'react-redux';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

const QuoteCard = ({ quote, upvoteQuote, downvoteQuote, removeQuote }) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{quote.content}</p> 
          <footer>- author <cite title="Source Title">{ quote.author }</cite></footer>
        </blockquote>
      </div>
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button 
            onClick={() => upvoteQuote(quote.id)}
            type="button" 
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button 
            onClick={() => downvoteQuote(quote.id)}
            type="button" 
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button 
            onClick={() => removeQuote(quote.id)}
            type="button" 
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         Votes: { quote.votes }
      </div>
    </div>
  </div>;


export default connect(null, { upvoteQuote, downvoteQuote, removeQuote })(QuoteCard);