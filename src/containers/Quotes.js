import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {

    const quotesList = this.props.quotes.map(quote => 
      <QuoteCard key={quote.id} quote={quote} 
      removeQuote={ this.props.removeQuote }
      upvoteQuote={ this.props.upvoteQuote }
      downvoteQuote={ this.props.downvoteQuote }
    />)

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
              {quotesList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//add arguments to connect as needed

//need to reach into state and grab what I want
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes  //you can name key whatever you want
    }
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes); //pull in specific actions instead of mapDispatchToProps
