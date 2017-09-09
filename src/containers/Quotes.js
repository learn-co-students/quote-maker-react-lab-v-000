import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  const QuoteCards = this.props.quotes.map((quote, index) => {
      return <QuoteCard content={quote.content} author={quote.author} key={index} store={this.props.store} />
    });

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
/* Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes */
              {QuoteCards}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote,
    removeQuote: removeQuote,
    upVote: upVote,
    downVote: downVote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
