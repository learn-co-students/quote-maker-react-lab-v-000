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
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(quote => 
               <QuoteCard 
                key={quote.id}
                quote={quote} 
                removeQuote={this.props.removeQuote}
                upvoteQuote={this.props.upvoteQuote}
                downvoteQuote={this.props.downvoteQuote} 
               />
               )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
} 

const mapPropsToDispatch = dispatch => ({
  removeQuote: id => dispatch({type: 'REMOVE_QUOTE', quoteId: id}),
  upvoteQuote: id => dispatch({type: 'UPVOTE_QUOTE', quoteId: id}),
  downvoteQuote: id => dispatch({type: 'DOWNVOTE_QUOTE', quoteId: id})
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapPropsToDispatch)(Quotes);
