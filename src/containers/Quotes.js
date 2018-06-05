import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux';

import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {
  handleUpvoteQuote = (quoteId) => {
    this.props.upvoteQuote(quoteId);
  }

  handleDownvoteQuote = (quoteId) => {
    this.props.downvoteQuote(quoteId);
  }

  render() {
    const quotesList = this.props.quotes.map((quote, index) => <QuoteCard quote={quote} key={index} upvoteQuote={this.handleUpvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>)

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
              {quotesList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {quotes: state.quotes}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
    removeQuote: removeQuote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
