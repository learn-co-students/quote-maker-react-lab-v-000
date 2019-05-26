import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {

    //destructuring props into individual variables
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
        
           {quotes.map(quote => <QuoteCard key={quote.id} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} quote={quote} />)}

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
//     upvotequote: (id) => {dispatch(upvoteQuote(id))},
//     downvotequote: (id) => {dispatch(downvoteQuote(id)) }
//   })
// }

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
// export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
