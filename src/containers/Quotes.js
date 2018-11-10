import React, { Component } from 'react';
import { connect } from 'react-redux';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes.js'
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
        {console.log(this.props)}
          <div className="row">
            <div className="col-md-4">
              <QuoteCard upvote={this.props.upvote} downvote={this.props.downvote} remove={this.props.remove}
              content={this.props.content}
              author={this.props.author}
              votes={this.props.votes}/>
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

const mapStatetoProps = (state) => ({
    content: state.author,
    author: state.author,
    votes: state.votes,
})

// const mapDispatchtoProps = dispatch => ({
//     upvote: quote => dispatch(upvoteQuote(quote)),
//     downvote: quote => downvoteQuote(quote),
//     remove: quote => dispatch(removeQuote(quote)),
// })
//(state => {content: state.content}
//add arguments to connect as needed
export default connect(mapStatetoProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
