import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  handleRemove = (id) => {
    this.props.removeQuote(id)
  }

  handleUpvote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (id) => {
    this.props.downvoteQuote(id)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { this.props.quotes.map(quote => <div key={ quote.quoteId }><QuoteCard quote={ quote } remove={ this.handleRemove } upvote={ this.handleUpvote } downvote={ this.handleDownvote } /></div>) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ quotes: state.quotes }), { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
