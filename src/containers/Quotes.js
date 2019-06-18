import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote} from '../actions/quotes.js';

class Quotes extends Component {
	renderQuotes = () => {
		console.log('this.props.quotes: ', this.props.quotes)	
		debugger
		return this.props.quotes.map((quote, id) => <QuoteCard key={id} quote={quote} removeQuote={this.props.removeQuote} />)
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

//add arguments to connect as needed
export default connect(state => ({quotes: state}), {removeQuote})(Quotes);
