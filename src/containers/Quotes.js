import React from 'react'
import { connect } from 'react-redux'
import QuoteCard from '../components/QuoteCard'
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends React.Component {

  render() {
    const {removeQuote, upvoteQuote, downvoteQuote} = this.props    
    const quoteCards = this.props.quotes.map(quote => {
      return <QuoteCard quote={quote} key={quote.id} upvote={upvoteQuote} downvote={downvoteQuote} remove={removeQuote}/>
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
    return {
      quotes: state.quotes.quoteList
  }
}

export default connect(mapStateToProps,{removeQuote, upvoteQuote, downvoteQuote} )(Quotes)