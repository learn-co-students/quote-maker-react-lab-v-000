import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote,upvoteQuote,downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

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
              {
                this.props.quotes.map(quote=><QuoteCard quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)
                //Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               }
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let quotes = state
  return quotes
}

const mapDispatchToProps = dispatch => ({
  removeQuote: id => dispatch(removeQuote(id)),
  upvoteQuote: id => dispatch(upvoteQuote(id)),
  downvoteQuote: id=> dispatch(downvoteQuote(id)),
})
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
