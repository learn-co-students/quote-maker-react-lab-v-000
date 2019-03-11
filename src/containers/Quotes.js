import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {bindActionCreators} from 'redux'
import { upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'


class Quotes extends Component {



  displayQuotes =()=>{
    return this.props.quotes.map((q, key)=>{
      console.log(this.props.upvoteQuote)
      return(<li key= {key}>{<QuoteCard quote={q} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>}</li>)

    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
          {console.log(this.props)}
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                {this.displayQuotes()}
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

function mapStateToProps(state){
  return {quotes: state.quotes}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote,
    removeQuote: removeQuote
  }, dispatch)
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
