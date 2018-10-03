import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import * as actions from "../actions/quotes";
import { throws } from "assert";

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
              {/* <QuoteCard quotes={this.props.quotes} /> */}
              {this.props.quotes.map(quote => (
                <QuoteCard
                  quote={quote}
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

//add arguments to connect as needed
export default connect(
  mapStateToProps,
  actions
)(Quotes);
