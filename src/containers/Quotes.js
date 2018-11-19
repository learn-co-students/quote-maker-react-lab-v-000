import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map(quote => <li key={quote.id}>{quote.content} by {quote.author}</li>);

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
          <ul className="list-of-quotes">
            <QuoteCard quotes={this.props.quotes} />
          </ul>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <QuoteCard removeQuote={() => this.props.removeQuote()} upvoteQuote={() => this.props.upvoteQuote()} downvoteQuote={() => this.props.downvoteQuote()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

export default connect(mapStateToProps)(Quotes);
