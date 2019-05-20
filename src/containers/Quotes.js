import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
//containers should usually be defined as class
//because of life cycle events
//container has its own internal state
//regular comp are stateless (presentational), usually
  render() {
    debugger
    //we destructuring props into individual variables

    const {quotes, removeQuote, upvoteQuote, downvoteQuote  } = this.props
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
            // accessing props and state requires 'this.'
           {quotes.map(quote => <QuoteCard key={quote.id} removequote={removeQuote} upvotequote={upvoteQuote} downvotequote={downvoteQuote} quote={quote} />)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    quotes: state.quotes
  })
}

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     removequote: (id) => {dispatch(removeQuote(id))},
//     upvotequote: () => {dispatch(upvoteQuote())},
//     downvotequote: () => {dispatch(downvoteQuote()) }
//   })
// }

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
