import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  render() {

    const quotes = this.props.quotes.map(quote=>{
      return <QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} />
    });
    
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

const mapStateToProps = (state)=> {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)