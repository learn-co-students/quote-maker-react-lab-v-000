import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';


class Quotes extends Component {

  render() {
    const quoteCards = this.props.quotes.map((quote, index) => {
      return <QuoteCard
        key={index}
        quote={quote}
        removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
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
              {quoteCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
