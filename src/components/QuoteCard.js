import React from 'react';
// import { connect } from 'react-redux';
// import { upvoteQuote, downvoteQuote } from '../actions/quotes';

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
            onClick={() => props.upvote(props.quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvote(props.quote.id)}
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
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

  // const handleUpvote = function(id){
    // console.log('upvoting');
    // console.log(id)
    // // this.props.dispatch(upvoteQuote(this.state));
  //   this.props.dispatch(upvoteQuote(id));
  // }

  // const handleDownvote = (event) => {
  //   console.log('downvoting');
  //   // upvoteQuote();
  // }

  // const mapDispatchToProps = {
  //   upvoteQuote,
  //   downvoteQuote
  // }

export default QuoteCard;
