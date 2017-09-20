import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    let quotes = this.props.quotes;
    let removeQuote = this.props.removeQuote;
    let upvoteQuote = this.props.upvoteQuote;
    let downvoteQuote = this.props.downvoteQuote;
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
              {quotes.map((quote)=>{
                return <QuoteCard
                  key={quote.id}
                  quote={quote}
                  removeQuote={removeQuote}
                  upvoteQuote={upvoteQuote}
                  downvoteQuote={downvoteQuote}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {quotes: state.quotes}
}
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
