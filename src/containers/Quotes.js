import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'
// import {connect} from 'react-redux'

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
               */
                /* We have Props coming in here from quotes actions */
              
               this.props.quotes.map((quote) => {
              
                return( 
                 < QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}
                 removeQuote = { this.props.removeQuote }
                   />  
               )
                    }
                  )
              }

              


            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
   console.log("stateInquote", state)
  return {
    quotes: state.quotes
  }
}
export default connect(mapStateToProps,{ upvoteQuote, downvoteQuote, removeQuote})(Quotes);
