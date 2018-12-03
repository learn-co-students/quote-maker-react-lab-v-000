import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux'

class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map((quote, ix) => {
      return <QuoteCard quote={quote} key={ix} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} 
      downvoteQuote={this.props.downvoteQuote} />
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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
// export default connect(mapStateToProps)(Quotes);
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

