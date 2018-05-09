import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

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
              {this.props.quotes.map((quote, key) => <QuoteCard key={key} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {quotes: state.quotes}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch );
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
