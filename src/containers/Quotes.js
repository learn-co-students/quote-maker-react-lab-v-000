import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

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
              {this.props.quotes.map(quote => <QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({ quotes })

const mapDispatchToProps = dispatch => ({
  addQuote: quote => dispatch({ type: "ADD_QUOTE", quote }),
  deleteQuote: quoteId => dispatch({ type: "REMOVE_QUOTE", quoteId }),
  upvoteQuote: quoteId => dispatch({ type: "UPVOTE_QUOTE", quoteId }),
  downvoteQuote: quoteId => dispatch({ type: "DOWNVOTE_QUOTE", quoteId })
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
