import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, downvoteQuote, upvoteQuote } from "../actions/quotes";

class Quotes extends Component {

  render() {

    const SingleQuote = this.props.quotes.map( (quote) =>
      <QuoteCard
        key={quote.id}
        quote={quote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
        removeQuote={this.props.removeQuote}
      /> )

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
              {SingleQuote}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);