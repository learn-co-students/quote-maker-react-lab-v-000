import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { mapStateToProps, upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const { quotes, upvoteQuote, downvoteQuote, removeQuote } = this.props
    const displayQuotes = quotes.map((quote, index) => {
      return <QuoteCard quote={quote} key={index} downvoteQuote={downvoteQuote} upvoteQuote={upvoteQuote} removeQuote={removeQuote} />
    })
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
              {displayQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { upvoteQuote, downvoteQuote, removeQuote})(Quotes);