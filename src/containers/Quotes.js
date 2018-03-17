import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote,upvoteQuote,downvoteQuote } from '../actions/quotes';

class QuotesContainer extends Component {
  removeQuote(event){
    this.props.removeQuote(event.target.value)
  }

  handleUpvote(event){
    this.props.upvoteQuote(event.target.value)
  }

  handleDownvote(event){
    this.props.downvoteQuote(event.target.value)
  }

  render() {
    // let quotes = this.props.quotes.map((q, index) => <QuoteCard key={index} />);
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map((q, i) => {
                 return (
                   <QuoteCard
                    key={i}
                    quote={q}
                    removeQuote={this.removeQuote} upvoteQuote={this.handleUpvote} downvoteQuote={this.handleDownvote} />)
               })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote
})(QuotesContainer);
