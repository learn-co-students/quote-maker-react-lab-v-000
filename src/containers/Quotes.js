import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import QuoteCard from '../components/QuoteCard';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import * as actions from '../actions/quotes';

class Quotes extends Component {

  render() {
    let quotes = this.props.quotes.map((quote, i) =>
      <QuoteCard
      key={i}
      quote={quote}
      removeQuote={this.props.removeQuote}
      upvoteQuote={this.props.upvoteQuote}
      downvoteQuote={this.props.downvoteQuote}
      />
    )

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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     removeQuote,
//     upvoteQuote,
//     downvoteQuote
//   })
// }

export default connect(mapStateToProps, actions)(Quotes);
