import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, downvoteQuote, upvoteQuote} from '../actions/quotes.js'

class Quotes extends Component {

  render() {
    const quoteList = this.props.quotes.map(quote => <QuoteCard quote={quote} downvote={this.props.downvoteQuote} upvote={this.props.upvoteQuote} remove={this.props.removeQuote} /> )
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
              {quoteList}
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
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
