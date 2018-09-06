import React from "react";
import QuoteCard from "./QuoteCard";
import { connect } from "react-redux";
import { upvoteQuote } from "../actions/quotes";
import { downvoteQuote } from "../actions/quotes";
import { removeQuote } from "../actions/quotes";
import { bindActionCreators } from "redux";

export class Quotes extends React.Component {
  render() {
    const quoteCards = this.props.quotes.map((quote, index) => (
      <QuoteCard
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
        removeQuote={this.props.removeQuote}
        votes={quote.votes}
        author={quote.author}
        content={quote.content}
        id={quote.id}
        key={index}
      />
    ));
    return <div>{quoteCards}</div>;
  }
}

function mapStateToProps(state) {
  return { quotes: state.quotes };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeQuote: removeQuote,
      upvoteQuote: upvoteQuote,
      downvoteQuote: downvoteQuote
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotes);
