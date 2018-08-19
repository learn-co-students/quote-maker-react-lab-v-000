import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote,
  removeQuote,
  upvoteQuote,
  downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    //Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
    const quotes = this.props.quotes.map((quote,index)=> {
      return <QuoteCard key={index} quote={quote} upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
        removeQuote={this.props.removeQuote} />
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
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

// const mapDispatchToProps = dispatch => {
//   return { QuoteActions }
// }
//add arguments to connect as needed
export default connect(mapStateToProps, { addQuote,
  removeQuote,
  upvoteQuote,
  downvoteQuote })(Quotes);
