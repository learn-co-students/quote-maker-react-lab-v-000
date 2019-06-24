import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import uuid from 'uuid';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     content: '',
  //     author: ''
  //   }
  // }

  render() {
    console.log(this.props)
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
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ quotes: state.quotes })
}
//
// //add arguments to connect as needed
// export default connect(mapStateToProps)(Quotes);
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes)
