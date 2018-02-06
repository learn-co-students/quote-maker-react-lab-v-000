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
              <ul>
                {this.props.quotes.map(quote =>
                  <QuoteCard
                    removeQuote={this.props.removeQuote}
                    upvoteQuote={this.props.upvoteQuote}
                    downvoteQuote={this.props.downvoteQuote}
                    key={quote.id}
                    quote={quote}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
