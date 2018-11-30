import React from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

const QuoteCard = props => {

const { quote, removeQuote, upvoteQuote, downvoteQuote } = props

 return (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
		<p>{ quote.content }</p>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
		<footer>- { quote.author } </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
	    value = { quote.id }
	    onClick = { event => upvoteQuote(event.target.value) }
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
	    value = { quote.id }
	    onClick = { event => downvoteQuote(event.target.value) }
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
	    value = { quote.id }
	    onClick = { event => removeQuote(event.target.value) }
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
		<div>Votes: { quote.votes } </div>
      </div>
    </div>
  </div>
 );
}

export default connect(null, { removeQuote, upvoteQuote, downvoteQuote })(QuoteCard);
