import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((quote, idx) => {
     return <QuoteCard
       key={idx}
       quote={quote}
       upvoteQuote={this.props.upvoteQuote}
       downvoteQuote={this.props.downvoteQuote}
       removeQuote={this.props.removeQuote}
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
              {/* quotecard generated within map of quotes */}
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
   dispatch
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
