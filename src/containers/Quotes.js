import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    const quoteList = this.props.quotes.map((quote, index) => {
      return (<QuoteCard 
        quote={quote} 
        key={index} 
        upvoteQuote={upvoteQuote}
        downvoteQuote={downvoteQuote}
        removeQuote={removeQuote}
        />)
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
              {quoteList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);