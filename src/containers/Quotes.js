import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';


class Quotes extends Component {

  handleDownVote = event => {
    event.preventDefault();
    const quoteId = event.target.value
    this.props.downvoteQuote(quoteId)
  }

  handleUpVote = event => {
    event.preventDefault();
    const quoteId = event.target.value
    this.props.upvoteQuote(quoteId)
  }

  handleRemoveQuote = event => {
    event.preventDefault();
    const quoteId = event.target.value
    this.props.removeQuote(quoteId)
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
              {this.props.quotes.map(quote => <div key={quote.id}><QuoteCard quote={quote} handleDownVote={this.handleDownVote} handleUpVote={this.handleUpVote} handleRemove={this.handleRemoveQuote} /></div>)}
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

//add arguments to connect as needed
export default connect(mapStateToProps, { downvoteQuote, upvoteQuote, removeQuote })(Quotes);
