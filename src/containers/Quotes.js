import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

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
              {this.props.quotes.map((quote) =>
                <QuoteCard
                  content={quote.content}
                  author={quote.author}
                  key={quote.id}
                  delete={this.props.removeQuote}
                  upvoteQuote ={this.props.upvoteQuote}
                  downvoteQuote ={this.props.downvoteQuote}
                  removeQuote={this.props.removeQuote}
                  quote={quote}
                />) }
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

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
