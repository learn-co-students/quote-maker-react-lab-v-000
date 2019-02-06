import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote,downvoteQuote,removeQuote } from '../actions/quotes'

class Quotes extends Component {



  render() {
   const { removeQuote, upvoteQuote, downvoteQuote } = this.props;

    const quotes = this.props.quotes.map((q, index) => {
      return <QuoteCard key={index} quote={q} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} />
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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({ quotes })



//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
