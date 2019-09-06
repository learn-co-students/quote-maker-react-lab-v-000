import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuoteCard from '../components/QuoteCard'
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  renderQuotes = () => this.props.quotes.map((quote, id) =>
    <QuoteCard key={id}
      id={quote.id}
      quote={quote.content}
      author={quote.author}
      votes={quote.votes}
      removeQuote={this.props.removeQuote}
      upvoteQuote={this.props.upvoteQuote}
      downvoteQuote={this.props.downvoteQuote} />)

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
              {this.renderQuotes()}
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

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
