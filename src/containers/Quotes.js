import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote } from '../actions/quotes'; 
import { upvoteQuote } from '../actions/quotes'; 
import { downvoteQuote } from '../actions/quotes'; 
import QuoteCard from '../components/QuoteCard';
import uuid from 'uuid';

class Quotes extends Component {
  removeQuoteCB = (quoteId) => {
    this.props.removeQuote(quoteId);
  }
  
  upvoteCB = (quoteId) => {
    this.props.upvoteQuote(quoteId);
  }
  
  downvoteCB = (quoteId) => {
    this.props.downvoteQuote(quoteId);
  }

  render() {
    let quotes = this.props.quotes.map(quote => <QuoteCard key={uuid()} quoteInfo={quote} removeQuoteCB={this.removeQuoteCB} upvoteCB={this.upvoteCB} downvoteCB={this.downvoteCB} />);
    
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
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {/* <QuoteCard /> */}
               {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quote => {
      dispatch(removeQuote(quote))
    },
    upvoteQuote: quote => {
      dispatch(upvoteQuote(quote))
    },
    downvoteQuote: quote => {
      dispatch(downvoteQuote(quote))
    }
  }
}

export default connect(state => ({ quotes: state.quotes }), mapDispatchToProps)(Quotes);

