import React from 'react';
import { bindActionCreators } from 'redux'; //line added.
import { connect } from 'react-redux';
import { upvoteQuote } from '../actions/quotes'

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.content}</p>
          <footer>- author <cite title={"Source Title"}>{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={ () => {props.upvoteQuote(props.id)} }
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.votes}</div>
      </div>
    </div>
  </div>;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upvoteQuote: upvoteQuote
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuoteCard);
