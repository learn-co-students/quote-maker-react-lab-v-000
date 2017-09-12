import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
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
               {quotes.map(quote => 
                <QuoteCard 
                  key={quote.id} 
                  upvoteQuote={upvoteQuote} 
                  downvoteQuote={downvoteQuote} 
                  removeQuote={removeQuote} 
                  quote={quote} 
                />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Provides quote objects from store as props to Quotes component
const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

// Provides action creators as props to Quotes component, where the actions are
// passed to dispatch function and sent to the store
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch);
} 

export default connect(mapStateToProps, {mapDispatchToProps})(Quotes);