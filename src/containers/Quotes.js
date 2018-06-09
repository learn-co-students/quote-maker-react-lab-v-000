import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

export class Quotes extends Component {

  render() {
    const {removeQuote, upvoteQuote, downvoteQuote} = this.props
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
              {
                this.props.quotes.map(quote=>{
                  return <QuoteCard 
                            key={quote.id} 
                            quote={quote} 
                            upvoteQuote={upvoteQuote}
                            downvoteQuote={downvoteQuote}
                            removeQuote={removeQuote}
                          />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return({
    quotes: state.quotes
  })
}

// const mapDispatchToProps = (dispatch)=>{
//   return {removeQuote, upvoteQuote, downvoteQuote}
// }

// export default connect(mapStateToProps)(Quotes);
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);