import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const {upvoteQuote, downvoteQuote, removeQuote, quotes} = this.props

    console.log(this.props)
    let mappedQuotes = quotes.map((quote, key) => {
      return <QuoteCard
                content={quote.content}
                key={quote.id}
                votes={quote.votes}
                author={quote.author}
                id={quote.id}
                downvoteQuote={downvoteQuote}
                upvoteQuote={upvoteQuote}
                removeQuote={removeQuote}
                quotes={quotes}
              />
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

              {mappedQuotes}
              /*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
