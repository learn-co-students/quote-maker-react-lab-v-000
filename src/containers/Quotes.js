import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    // console.log(this.props.quotes)
    const quoteCards = this.props.quotes.map(quote => {
      return (
        <QuoteCard
         removeQuote={this.props.removeQuote}
         upvoteQuote={this.props.upvoteQuote}
         downvoteQuote={this.props.downvoteQuote}
         quote={quote}
         key={quote.id}
       />
      )
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {quoteCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
