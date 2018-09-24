import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  remove = (id) => {
    this.props.dispatch(removeQuote(id));
  }

  upvote = (id) => {
    this.props.dispatch(upvoteQuote(id));
  }

  downvote = (id) => {
     this.props.dispatch(downvoteQuote(id));
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(
                  quote => 
                  <QuoteCard content={quote.content} author={quote.author} id={quote.id} remove={this.remove} upvote={this.upvote} downvote={this.downvote} />
                  )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("current state: ", state)
  return {quotes: state.quotes}
}


//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
