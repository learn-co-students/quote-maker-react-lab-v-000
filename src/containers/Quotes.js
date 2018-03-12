import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {bindActionCreators} from 'redux'
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleRemoveQuote(event){
    this.props.removeQuote(event.target.value)
  }

  handleUpvote(event){
    this.props.upvoteQuote(event.target.value)
  }

  handleDownvote(event){
    this.props.downvoteQuote(event.target.value)
  }

  render() {
    console.log(this.props)
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
              {this.props.quotes.map((quote)=><QuoteCard key={quote.id} quote={quote} removeQuote={this.handleRemoveQuote} upvoteQuote={this.handleUpvote} downvoteQuote={this.handleDownvote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);