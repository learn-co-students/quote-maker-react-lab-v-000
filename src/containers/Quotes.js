import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes.js';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((q, index) => {
      return <QuoteCard key={index} quote={q} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} downvoteQuote={this.props.downvoteQuote}/>
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <ul>
        </ul>
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

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
