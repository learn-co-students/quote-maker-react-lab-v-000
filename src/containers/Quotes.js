import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  removeAction = (event) => {
    this.props.removeQuote(event.target.id)
  }

  upvoteAction = (event) => {
    this.props.upvoteQuote(event.target.id)
  }

  downvoteAction = (event) => {
    this.props.downvoteQuote(event.target.id)
  }

  render() {
    const quotes = this.props.quotes.map((quote) => {
      return (
       <QuoteCard
          key={quote.id}
          quote={quote}
          handleRemoveButton={this.removeAction}
          handleUpvoteButton={this.upvoteAction}
          handleDownvoteButton={this.downvoteAction}
       />
      );
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

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({
    upvoteQuote: upvoteQuote, 
    downvoteQuote: downvoteQuote,
    removeQuote: removeQuote 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToState)(Quotes);