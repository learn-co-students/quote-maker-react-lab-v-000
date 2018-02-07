import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const props = this.props
    let allQuotes = props.quotes.map(quote => <QuoteCard
      key={quote.id}
      quote = {quote}
      removeQuote={props.removeQuote}
      upvote={props.upvoteQuote}
      downvote={props.downvoteQuote} />);

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
              {allQuotes}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeQuote: removeQuote,
                              upvoteQuote: upvoteQuote,
                              downvoteQuote: downvoteQuote}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Quotes);
