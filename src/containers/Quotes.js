import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes.js';

class Quotes extends Component {
	renderQuotes = () => {
		return this.props.quotes.map((quote, id) => <QuoteCard key={id} quote={quote} removeQuote={this.props.removeQuote} uQuote={this.props.upvoteQuote} dQuote={this.props.downvoteQuote}  />)
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
								{this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
	return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
