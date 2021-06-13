import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, removeQuote, upvoteQuote } from '../actions/quotes';
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
              {this.props.quotes.map(quoteData => <QuoteCard key={quoteData.id} quote={quoteData} {...this.props.actions}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeQuote: quoteId=> dispatch(removeQuote(quoteId)),
      upvoteQuote: quoteId=> dispatch(upvoteQuote(quoteId)),
      downvoteQuote: quoteId=> dispatch(downvoteQuote(quoteId))
    }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
