import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  handleRemoveQuote = (quoteId) => {
    this.props.removeQuote(quoteId);
  };

  handleUpvoteQuote = (quoteId) => {
    this.props.upvoteQuote(quoteId);
  };

  handleDownvoteQuote = (quoteId) => {
    this.props.downvoteQuote(quoteId);
  };

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
              {this.props.quotes.map((quote) => {
                return (
                  <QuoteCard
                    quote={quote}
                    key={quote.id}
                    handleRemoveQuote={this.handleRemoveQuote}
                    handleUpvoteQuote={this.handleUpvoteQuote}
                    handleDownvoteQuote={this.handleDownvoteQuote}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
