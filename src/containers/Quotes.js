import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  
  render() {
    const quotes = this.props.quotes
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
            {quotes.map((quote) => <QuoteCard key={quote.id}
             upvoteQuote={this.props.upvoteQuote}
              downvoteQuote={this.props.downvoteQuote}
               removeQuote={this.props.removeQuote}
                quote={quote} />)}
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
 //add arguments to connect as needed

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
