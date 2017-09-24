import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

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
              {this.props.quotes.map((quote,index) => <QuoteCard key={index} quote={quote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} remove={this.props.removeQuote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({upvoteQuote, downvoteQuote, removeQuote}, dispatch);
}

const mapStateToProps = state => {
  return {quotes: state.quotes};
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
