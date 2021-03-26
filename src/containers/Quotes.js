import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  onRemoveQuote = (id) => {
    console.log("onRemoveQuote");
    this.props.removeQuote(id);
  }

  upvoteQuote = (id) => {
    console.log("upvoteQuote");
    this.props.upvoteQuote(id);
  }

  downvoteQuote = (id) => {
    console.log("downvoteQuote");
    this.props.downvoteQuote(id);
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
               {this.props.quotes.map((quote, idx) => 
                  <QuoteCard key={idx} quote={quote} removeQuote={this.onRemoveQuote} upvoteQuote={this.upvoteQuote} downvoteQuote={this.downvoteQuote} />
               )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
