import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

  

  upvoteQuote = quoteId => {
    this.props.dispatch(upvoteQuote(quoteId))
  }

  downvoteQuote = quoteId => {
    this.props.dispatch(downvoteQuote(quoteId))
  }

  removeQuote = quoteId => {
    this.props.dispatch(removeQuote(quoteId))
  }

  renderQuotes = () => this.props.quotes.map((quote, id) => <QuoteCard key={id} quote={quote} upvote={this.upvoteQuote} downvote={this.downvoteQuote} remove={this.removeQuote} />)

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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
               this.renderQuotes()
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps)(Quotes);
