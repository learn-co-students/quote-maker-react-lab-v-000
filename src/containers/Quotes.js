import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
// import { type } from 'os';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {


  render() {
    const { removeQuote, upvoteQuote, downvoteQuote } = this.props;
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
            {this.props.quotes.map(quote => <QuoteCard key={quote.id} content={quote.content} author={quote.author} votes={quote.votes} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} id={quote.id} removeQuote={removeQuote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes:  state.quotes }
}





//add arguments to connect as needed
export default connect(mapStateToProps, { upvoteQuote, downvoteQuote, removeQuote })(Quotes);
