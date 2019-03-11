import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  render() {
    const { quotes, removeQuotes, upvoteQuotes, downvotesQuotes } = this.props
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
              {quotes.map(quote => <QuoteCard key={quote.id} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    quotes: state.quotes
  })
}
//add arguments to connect as needed
//include in args the specific props being mapped to state 
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote }) (Quotes);
