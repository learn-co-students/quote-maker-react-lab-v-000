import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    {/* 
    Just to review what happened... We have a quoteCard, but instead of making things messy, lets make it a variable..
    We want every quote card to be connected to the actions we have set and we need to be able to set multiple quotes..
    Anytime we want multiple items to add get the same stuff we can map each individual item to get that so we map every quote
    with the actions.
    */}
    const quotes = this.props.quotes.map((quote, index) => {
      return <QuoteCard key={index} quote={quote} upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
