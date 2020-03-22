import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {

  // upvoteQuote = quoteId => {
  //   this.props.upvoteQuote(quoteId)    
  // }

  // downvoteQuote = quoteId => {
  //   this.props.downvoteQuote(quoteId)    
  // }

  // removeQuote = quoteId => {
  //   this.props.removeQuote(quoteId)    
  // }

  render() {
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
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />)}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: (quoteId) => dispatch({type: 'UPVOTE_QUOTE', quoteId}),
    downvoteQuote: (quoteId) => dispatch({type: 'DOWNVOTE_QUOTE', quoteId}),
    removeQuote: (quoteId) => dispatch({type: 'REMOVE_QUOTE', quoteId})
  }
}

//add arguments to connect as needed
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Quotes);
