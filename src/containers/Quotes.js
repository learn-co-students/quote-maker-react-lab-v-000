import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions/quotes";
import QuoteCard from "../components/QuoteCard";

class Quotes extends Component {
  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
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
              {quotes.map((quote, idx) => (
                <QuoteCard
                  key={idx}
                  quote={quote}
                  onDelete={removeQuote}
                  onUpvote={upvoteQuote}
                  onDownvote={downvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({ quotes });
const { removeQuote, upvoteQuote, downvoteQuote } = actions;
export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
