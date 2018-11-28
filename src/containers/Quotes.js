import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

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
              {this.props.quotes.map(quote =>
                <QuoteCard
                  quote={quote}
                  key={quote.id}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                  removeQuote={this.props.removeQuote}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({quotes: state.quotes}), {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
