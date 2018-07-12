import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import { bindActionCreators } from '../../node_modules/redux';

class Quotes extends Component {

  makeQuoteCards() {
    return this.props.quotes.map((quoteObj, index) => 
      <QuoteCard
        quote={quoteObj}
        key={index}
        removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
    )
  }

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
              {this.makeQuoteCards()}
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

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { 
      removeQuote, 
      upvoteQuote,
      downvoteQuote
    },
    dispatch
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Quotes);