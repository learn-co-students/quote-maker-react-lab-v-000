import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeQuote, upvoteQuote, downvoteQuote } from './../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  handleOnDelete = (event, quote) => {
    this.props.removeQuote(quote.id);
  }

  handleOnUpvote = (event, quote) => {
    this.props.upvoteQuote(quote.id);
  }

  handleOnDownvote = (event, quote) => {
    this.props.downvoteQuote(quote.id);
  }

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
              {this.props.quotes.map((quote, index)=>{
                return (<QuoteCard
                  quote={quote}
                  key={index}
                  onDelete={event=>this.handleOnDelete(event, quote)}
                  onUpvote={event=>this.handleOnUpvote(event, quote)}
                  onDownvote={event=>this.handleOnDownvote(event, quote)}/>);
              })}
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

function mapStateToProps(state){
  return {quotes: state.quotes};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
