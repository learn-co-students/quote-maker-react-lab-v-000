import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

export default class Quotes extends Component {

  render() {
    //let quotes = this.props.quotes.map((quote, index) => <QuoteCard key={index} quote={quote} />)

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

            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return {quotes: state.quotes}
// }
//
// export const ConnectedQuotes = connect(mapStateToProps)(Quotes);
