import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

  handleButtons = (event) => {
    event.preventDefault()
    if (event.target.name === 'upvote'){
      this.props.upvoteQuote(this.props.quotes[0].id)
    } else if (event.target.name === 'downvote') {
      this.props.downvoteQuote(this.props.quotes[0].id)
    } else if (event.target.name === 'removequote') {
      this.props.removeQuote(this.props.quotes[0].id)
    }
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
              <ul>
                {this.props.quotes.map((quote, i) => (
                  <li key={i}>
                  <QuoteCard 
                  props={quote} 
                  upvoteQuote={this.handleButtons.bind(this)}/>
                  </li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

export default connect(mapStateToProps, { upvoteQuote, downvoteQuote, removeQuote})(Quotes);
