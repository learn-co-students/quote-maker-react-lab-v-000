import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class Quotes extends Component {
  render() {
    // const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    const quotes = this.props.quotes.map((q, i) => {
      return <QuoteCard key={ i } quote={ q } upvoteQuote={ this.props.upvoteQuote } downvoteQuote={ this.props.downvoteQuote } removeQuote={ this.props.removeQuote } />
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
              {/* { quotes.map(quote =>
                <QuoteCard
                  key={ quote.id }
                  upvoteQuote={ upvoteQuote }
                  downvoteQuote={ downvoteQuote }
                  removeQuote={ removeQuote }
                  quote={ quote }
                />
                )
              } */}
              { quotes }
              {/*

                TODO:
  
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }, dispatch)
}

//add arguments to connect as needed
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { removeQuote, upvoteQuote, downvoteQuote }
)(Quotes);
