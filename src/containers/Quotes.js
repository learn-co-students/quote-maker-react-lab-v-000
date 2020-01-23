import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote} from '../actions/quotes';

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
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => <QuoteCard key={quote.id}
                                                 quote={quote}
                                                 removeQuote={removeQuote}
                                                 upvoteQuote={upvoteQuote}/>)

                //Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  });
}


//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote})(Quotes);
