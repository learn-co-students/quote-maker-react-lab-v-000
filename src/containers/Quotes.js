import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes';

class Quotes extends Component {
  handleUpVote = id => {
    this.props.upvoteQuote(id);
  }

  handleDownVote = id => {
    this.props.downvoteQuote(id);
  }

  handleRemoveQuote = id => {
    this.props.removeQuote(id);
  }

  render() {
    const quotes = this.props.quotes.map((quote, i) => {
      return <QuoteCard key={i}
                        quote={quote}
                        upVote={this.handleUpVote}
                        downVote={this.handleDownVote}
                        removeQuote={this.handleRemoveQuote}
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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {quotes: state.quotes};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({upvoteQuote, downvoteQuote, removeQuote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
