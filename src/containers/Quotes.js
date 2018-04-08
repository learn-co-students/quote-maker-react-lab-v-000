import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux';
import {addQuote} from '../actions/quotes'

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
              {/* 
                TODO: 

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               
               < QuoteCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,

  }
}

const mapDispatchToProps = (dispatch) => {
  
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

