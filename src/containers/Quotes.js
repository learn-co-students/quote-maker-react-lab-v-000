import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, downvoteQuote, upvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    console.log(this.props);
    const allQuotes = this.props.quotes.map(quote => (
      <QuoteCard
        key={quote.id}
        removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
        quote={quote}
      />
    ));
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
              {/* {this.props.} */}
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {allQuotes}
              {/* <QuoteCard removeQuote={this.props.removeQuote} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeQuote: quoteId => {
//       dispatch(removeQuote(quoteId));
//     },
//     upvoteQuote: quoteId => {
//       dispatch(upvoteQuote(quoteId));
//     }
//   };
// };

//add arguments to connect as needed
export default connect(
  mapStateToProps,
  { upvoteQuote, downvoteQuote, removeQuote }
  // mapDispatchToProps
)(Quotes);
