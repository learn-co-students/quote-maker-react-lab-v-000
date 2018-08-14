import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  render() {
    const quoteMap = this.props.quotes.map(quote => {
      return (
        <QuoteCard
          key={quote.id}
          quote={quote}
          removeQuote={removeQuote}
          upvoteQuote={upvoteQuote}
          downvoteQuote={downvoteQuote}
          updateVotes={this.props.updateVotes}
        />
      )
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
              <ul>
                {quoteMap}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Quotes);
