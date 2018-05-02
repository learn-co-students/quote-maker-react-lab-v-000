import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  removeQuote(event) {
    this.props.removeQuote(event.target.value)
  }

  handleUpVote(event) {
    this.props.upvoteQuote(event.target.value)
  }

  handleDownvote(event) {
    this.props.downvoteQuote(event.target.value)
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
              {this.props.quotes.map((quote, index) => {
                return (
                  <QuoteCard key={index} quote={quote} 
                  removeQuote={this.removeQuote}
                  upvoteQuote={this.handleUpVote}
                  downvoteQuote={this.handleDownvote}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes, 
  }
}

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(Quotes);