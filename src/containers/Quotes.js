import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    // const quotes = this.props.store.getState().map((quote, index) => {
    //   return <QuoteCard key={index} quote={quote} />
    // });
    
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
              { /* quotes */ }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state
  }
}

export default connect(null, mapStateToProps)(Quotes);