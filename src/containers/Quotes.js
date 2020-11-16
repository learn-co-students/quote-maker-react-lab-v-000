import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes
    const removeQuote = this.props.removeQuote
    const upvoteQuote = this.props.upvoteQuote
    const downvoteQuote = this.props.downvoteQuote

    let displayedQuotes = quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote}/>
  )


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
            {displayedQuotes}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { quotes: state.quotes}
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
