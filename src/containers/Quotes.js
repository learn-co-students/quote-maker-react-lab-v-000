import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    
    const quotes = this.props.quotes;
    const removeQuote = this.props.removeQuote;
    const upvoteQuote = this.props.upvoteQuote;
    const downvoteQuote = this.props.downvoteQuote;
    
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
              {quotes.map((quote)=> { return <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote}/>})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return ({
    quotes: state.quotes
  })
}

export default connect(mapStatetoProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
