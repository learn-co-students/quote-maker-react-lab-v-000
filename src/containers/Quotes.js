import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote} from '../actions/quotes'
import {downvoteQuote} from '../actions/quotes';
import {removeQuote} from '../actions/quotes'

class Quotes extends Component {
  render() {
    const quotes = this.props.quotes.map((quote,index)=> <li key={index}><QuoteCard quoteInfo={quote} upvoteQuote = {this.props.upvoteQuote} downvoteQuote = {this.props.downvoteQuote} removeQuote = {this.props.removeQuote}/> </li>)
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
export default connect(state => ({quotes: state.quotes}), {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
