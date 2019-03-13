import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleUpvote = id => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = id => {
    this.props.downvoteQuote(id)
  }

  handleRemove = id => {
    this.props.removeQuote(id)
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
              {/*Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes*/}
              {this.props.quotes.map(quote => <div key={quote.id}><QuoteCard quote={ quote } upvoteQuote={ this.handleUpvote } downvoteQuote={ this.handleDownvote } removeQuote={ this.handleRemove } /></div>)}
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

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
