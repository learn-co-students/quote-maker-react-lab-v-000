import React from 'react';

const QuoteCard = props => {

  handleClick(event) {
    if (event.target.name === "upvote") {
      props.dispatch.upvoteQuote(props.id)
    } if (event.target.name === "downvote") {
      props.dispatch.downvoteQuote(props.id)
    } if (event.target.name === "delete") {
      props.dispatch.removeQuote(props.id)
    }
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.content}</p> 
            <footer>- author <cite title="Source Title">{props.author}</cite></footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              name="upvote"
              onClick={(event) => this.handleClick(event)}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              name="downvote"
              onClick={(event) => this.handleClick(event)}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              name="delete"
              onClick={(event) => this.handleClick(event)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>)
}

export default QuoteCard;
