import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

  onUpVote = quoteId => {
    debugger
    this.props.upvoteQuote(quoteId);
  }

  onDownVote = quoteId => {
    this.props.downvoteQuote(quoteId);
  }

  onRemoveQuote = quoteId => {
    this.props.removeQuote(quoteId);
  }

  render() {
    const quotes = this.props.quotes.map((quote, index) => <QuoteCard key={index} quote={quote} onUpVote={this.onUpVote} onDownVote={this.onDownVote} onRemoveQuote={this.onRemoveQuote} />);

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
            {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  debugger
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    },
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
