import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuoteCards() {
    return this.props.quotes.map((quote, i) => {
      return (
        <QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} key={i}/>
      )
    })
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
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
