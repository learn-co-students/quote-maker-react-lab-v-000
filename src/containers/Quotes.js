import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
          <ul className="list-of-quotes">
            {this.props.quotes.map(quote => <li key={quote.id}>{quote.content} by {quote.author}</li>)}
          </ul>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} quote={quote} />)};
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
