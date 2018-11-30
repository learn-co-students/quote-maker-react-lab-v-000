import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


const Quotes = props => {

const quoteCards = props.quotes.map( quote => <QuoteCard key={quote.id} quote={ quote } removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)

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

	    	{ quoteCards }
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = ({ quotes }) => ({ quotes })

const mapDispatchToProps = dispatch => ({
  removeQuote,
  upvoteQuote,
  downvoteQuote
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
