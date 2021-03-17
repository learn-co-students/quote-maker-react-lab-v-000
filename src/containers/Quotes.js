import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    
    const {upvoteQuote, downvoteQuote} = this.props;
    
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
               { this.props.quotes.map((quote) => <QuoteCard quote={quote} upvoteQuote={ upvoteQuote } downvoteQuote={ downvoteQuote } />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps, { upvoteQuote, downvoteQuote })(Quotes);
