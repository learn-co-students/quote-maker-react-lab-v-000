import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import { connect } from 'react-redux';
import {upvoteQuote, downvoteQuote} from '../actions/quotes'



class Quotes extends Component {
   
    renderQuotes = () => {
        return(this.props.quotes.map((quote, index) =>  
            <QuoteCard key={index} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}  />
        ))
    }
    
    
    render() { 
        return (
            <div>
                {this.renderQuotes()}
            </div>
        )
    };
};

const mapStateToProps = (state)=> {
   return {
       quotes: state.quotes
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
      upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
      downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId)),

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);