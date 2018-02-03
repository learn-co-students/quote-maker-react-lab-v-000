import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { 
  removeQuote,
  upvoteQuote,
  downvoteQuote 
} from '../actions/quotes';

class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map((quote, index) => {
      return <li key={quote.id} className="quote">
        <QuoteCard quote={quote}/>
      </li>
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
              <ul className="quotes">
                {quotes}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);