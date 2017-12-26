import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {bindActionCreators} from 'redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;

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
              {quotes.map((quote) => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(null, {})(Quotes);
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators ({
     removeQuote: removeQuote,
     upvoteQuote: upvoteQuote,
     downvoteQuote: downvoteQuote,
   }, dispatch);
 };

 const mapStateToProps = (state) => {
   return ({quotes: state.quotes})
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
