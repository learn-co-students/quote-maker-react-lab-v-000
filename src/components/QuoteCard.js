import React from 'react';

const QuoteCard = (props) =>

  dispatchAction = event => {
    
    this.props.dispatch
  }

  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{this.props.content}</p> 
          <footer>- author <cite title="Source Title">{this.props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            name="upvote"
            onClick={this.dispatchAction}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            name="downvote"
            onClick={this.dispatchAction}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            name="delete"
            onClick={this.dispatchAction}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {this.props.quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
