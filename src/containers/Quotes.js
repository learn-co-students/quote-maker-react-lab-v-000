import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

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
              {this.props.quotes.map((quote, index) => <QuoteCard key={index} content={quote.content} author={quote.author} removeQuote={this.props.removeQuote(quote.id)} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)}
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

const mapDispatchToProps = dispatch => {
  return{
    removeQuote: () => {
      dispatch(removeQuote())
    },
    upvoteQuote: () => {
      dispatch(upvoteQuote())
    },
    downvoteQuote: () => {
      dispatch(downvoteQuote())
    }
  }
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);


// Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
