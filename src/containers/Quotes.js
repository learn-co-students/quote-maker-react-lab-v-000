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
            {this.props.quotes.map(quote =>
               <QuoteCard quote={quote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} remove={this.props.removeQuote}/>
              )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*
  TODO:
  Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
 */
const mapStatetoProps = (state) => ({
    quotes: state.quotes
})
//or use 'return' keyword rather than the parenthesis (maybe ES6)
//aka return {quotes: etc}
export default connect(mapStatetoProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);

// const mapDispatchtoProps = dispatch => ({
//     upvote: quote => dispatch(upvoteQuote(quote)),
//     downvote: quote => downvoteQuote(quote),
//     remove: quote => dispatch(removeQuote(quote)),
// })
//bind action reactors binds it to your class, so it's accessible to this.props b/c it binds it to 'this'
//(state => {content: state.content}
//add arguments to connect as needed
