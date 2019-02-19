import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

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
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
// state argument below is the entire Redux store state
// mapStateToProps arrow function returns an object 
// that contains only the portion of the Redux store state that the connected Quotes component needs
// It uses this to see what should be re-rendered in the DOM, if any changes occurred
// The quotes key in the returned object = name of the quotes prop passed to the connected React Quotes component
// We access the array of quote objects stored in Redux store state
// from within the React Quotes component's render() method as this.props.quotes
*/
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}
/*
// Below, the mapDispatchToProps object (which contains action creator function values)
// is passed as the second argument to connect() function and does the following automatically:

// function mapDispatchToProps(dispatch, quoteIdToRemove, quoteIdToUpvote, quoteIdToDownvote) {
//   return {
//     removeQuote: (quoteIdToRemove) => dispatch(removeQuote(quoteIdToRemove)),
//     upvoteQuote: (quoteIdToUpvote) => dispatch(upvoteQuote(quoteIdToUpvote)),
//     downvoteQuote: (quoteIdToDownvote) => dispatch(downvoteQuote(quoteIdToDownvote))
//   }
// }
// Each key in the returned object has the same name as an action creator function. 
// Each key in the returned object points to the value of an action-dispatching arrow function.
// Each action-dispatching arrow function object is passed as a prop to the connected Quotes React component
// When ultimately invoked, each action-dispatching function will internally call dispatch() function
// with an argument of the action object that is returned by invoking the action creator function
// with the id of the quote
*/
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
