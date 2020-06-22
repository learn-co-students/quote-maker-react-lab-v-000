import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import { connect } from 'react-redux';
import {upvoteQuote, downvoteQuote} from '../actions/quotes'



class Quotes extends Component {
    
    
    
    
    render() {
        const { quotes, upvoteQuote, downvoteQuote } = this.props
        
        const renderQuotes = () => quotes.map((quote, index) =>  <QuoteCard key={index} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>)
        
        return (
            <div>
                {renderQuotes()}
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
        upvoteQuote: () => dispatch(upvoteQuote()),
        downvoteQuote: () => dispatch(downvoteQuote())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Quotes);