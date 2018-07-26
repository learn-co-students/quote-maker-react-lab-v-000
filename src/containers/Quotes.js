import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteCard from '../components/QuoteCard'
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {
  render () {
    let quotes = this.props.quotes.map((quote, index) =>
      <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} />
    )
    return (
      <div>
        <hr />
        <div className='row justify-content-center'>
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {quotes}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes)
