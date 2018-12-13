import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
//import the actions needed for the quote card

class Quotes extends Component {

  render() {
    //QuoteCard component is going to take props of each individual quote
    const quotes = this.props.quotes.map((quote, index) => {
      return <QuoteCard key={index} quote={quote} upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} />
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
            {/*//returns the return value of quotes which is a QuoteCard component*/}
            {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

//Another option is to directly add the action functions directly as an object
//export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
