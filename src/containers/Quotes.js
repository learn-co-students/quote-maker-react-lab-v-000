import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    let quotes = this.props.quotes.map((quote, index) => <QuoteCard key={quote.id} quote={quote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
)
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

const mapStateToProps = state => {
  return {quotes: state.quotes};
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
