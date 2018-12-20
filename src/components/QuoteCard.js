import React from 'react';

const QuoteCard = (props) =>

  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          { props.quoteInfo.content}
           <footer>- Author <cite title="Source Title">{ props.quoteInfo.author }</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary">Upvote</button>

          <button
            type="button"
            className="btn btn-secondary">Downvote</button>

          <button
            type="button"
            className="btn btn-danger"
        onClick={props.handleRemove}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
