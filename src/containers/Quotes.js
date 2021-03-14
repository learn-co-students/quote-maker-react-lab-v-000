import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  // constructor() {
  //   super();
  //   this.upvoteQuote = this.upvoteQuote.bind(this);
  // }
  
  renderQuotes = () => this.props.quotes.map(
    (quote) => <QuoteCard quote={quote} upvoteQuote={ this.upvoteQuote } />)

  render() {
    debugger
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
               { this.renderQuotes() }
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
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
