import React, { Component } from 'react';
import { connect } from 'react-redux';
import {upvoteQuote,downvoteQuote,removeQuote} from '../actions/quotes';
  import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

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


                  {this.props.quotes.map(quote => <QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)}


            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    quotes: state.quotes
  }

}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    },

      upvoteQuote: (quoteId) => {
        dispatch(upvoteQuote(quoteId))
      },

      downvoteQuote: (quoteId) => {
        dispatch(downvoteQuote(quoteId))
      }

  };
};

//add arguments to connect as needed
export default connect(mapStateToProps,mapDispatchToProps)(Quotes);
