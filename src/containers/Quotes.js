import React, { Component } from 'react';
import { connect } from 'react-redux';
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


                  {this.props.quotes.map(quote => <QuoteCard quote={quote} removeQuote={removeQuote(quote.id)} upvote={this.upvoteQuote(quote.id)} downvote={this.downvoteQuote(quote.id)}/>)}
                // Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes


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
