import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const allQuotes = this.props.quotes.map((quote, idx) => {
      return <QuoteCard
        key={idx}
        quote={quote}
        handleUpvote={this.props.upvoteQuote}
        handeDownvote={this.props.downvoteQuote}
        handleRemove={this.props.removeQuote}
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
              {allQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upvoteQuote, 
    downvoteQuote, 
    removeQuote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);