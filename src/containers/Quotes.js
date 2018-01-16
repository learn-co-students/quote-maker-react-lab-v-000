import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  render() {
    const {upvoteQuote, downvoteQuote, removeQuote, quotes} = this.props;
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
               {quotes.map((quote) => {
                 return <QuoteCard
                 key={quote.id}
                 removeQuote={removeQuote}
                 upvoteQuote={upvoteQuote}
                 downvoteQuote={downvoteQuote}
                 quote={quote}
                 />
               })
             }
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

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
