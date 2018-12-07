import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'

class Quotes extends Component {

  quotes = () => {
    return this.props.state.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvote={this.props.upvote} downvote={this.props.downvote} remove={this.props.remove} />)
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
              {this.quotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvote: (id) => {
      dispatch(upvoteQuote(id))
    },
    downvote: (id) => {
      dispatch(downvoteQuote(id))
    },
    remove: (id) => {
      dispatch(removeQuote(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
