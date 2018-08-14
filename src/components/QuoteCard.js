import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuoteCard extends Component {
  handleRemove = event => {
    this.props.dispatch(this.props.removeQuote(this.props.quote.id)) 
  }

  handleUpvote = event => {
    this.props.dispatch(this.props.upvoteQuote(this.props.quote.id)) 
  }

  handleDownvote = event => {
    this.props.dispatch(this.props.downvoteQuote(this.props.quote.id)) 
  }

  render() {
    return (
      <div>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              {<p>{this.props.quote.content}</p>}
              {
                <footer>
                  - author <cite title="Source Title"> {this.props.quote.author}</cite>
                </footer>
              }
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
                onClick={this.handleUpvote}
              >
                Upvote
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.handleDownvote}
              >
                Downvote
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleRemove}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {<div>Votes: {this.props.updateVotes(this.props.quote.id)}</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(QuoteCard);
