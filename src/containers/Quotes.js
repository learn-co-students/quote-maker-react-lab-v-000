import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  debugger; 
  renderQuotes = () => this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote}/>)

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
              {this.renderQuotes()}
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

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
