import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes';

class Quotes extends Component {

  render() {
    const {state, upvoteQuote, downvoteQuote, removeQuote} = this.props;
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
              {state.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

//add arguments to connect as needed
export default connect(state => ({ state }), {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
