import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteCard from '../components/QuoteCard'
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import { bindActionCreators } from 'redux'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    const quoteCards = quotes.map(quote => {
      return <QuoteCard
        key={quote.id}
        quote={quote}
        removeQuote={removeQuote}
        upvoteQuote={upvoteQuote}
        downvoteQuote={downvoteQuote}
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
              {quoteCards}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({ quotes: state.quotes })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeQuote, upvoteQuote, downvoteQuote }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
