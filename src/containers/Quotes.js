import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {

    const {quotes, upvoteQuote, downvoteQuote, removeQuote} = this.props

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
              {
              quotes.map(quote => 
                <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} />
              )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return({
    quotes: state.quotes
  })
}
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
