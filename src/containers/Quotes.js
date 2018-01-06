// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import QuoteCard from '../components/QuoteCard';
import React from "react";
import QuoteCard from "./QuoteCard";
import { connect } from "react-redux";
import { upvoteQuote } from "../actions/quotes";
import { downvoteQuote } from "../actions/quotes";
import { removeQuote } from "../actions/quotes";
import { bindActionCreators } from "redux";


class Quotes extends React.Component {

  render() {
     const quoteCards = this.props.quotes.map((quote, index) => (
       <QuoteCard
         upvoteQuote={this.props.upvoteQuote}
         downvoteQuote={this.props.downvoteQuote}
         removeQuote={this.props.removeQuote}
         votes={quote.votes}
         author={quote.author}
         content={quote.content}
         id={quote.id}
         key={index}
       />
     ));
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
              {quoteCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { quotes: state.quotes };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeQuote: removeQuote,
      upvoteQuote: upvoteQuote,
      downvoteQuote: downvoteQuote
    },
    dispatch
  );
};

export const ConnectedQuotes = connect(mapStateToProps, mapDispatchToProps)(
  Quotes
);
