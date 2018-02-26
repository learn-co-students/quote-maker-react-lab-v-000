import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'


class Quotes extends Component {

  render() {
   let quotes = this.props.quotes.map(
     (quote) => {
       return <QuoteCard content={quote.content} author={quote.author} votes={quote.votes}
       remove={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>});

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

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, {})(Quotes);
