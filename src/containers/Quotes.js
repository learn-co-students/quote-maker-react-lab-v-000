import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, downvoteQuote, upvoteQuote} from '../actions/quotes';

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
                {this.props.quotes.map(quote=>
                <QuoteCard 
                key={quote.id} 
                quote={quote}
                delete={this.props.removeQuote}
                downvote={this.props.downvoteQuote}
                upvote={this.props.upvoteQuote}
                />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps=(state)=>({quotes: state.quotes})

const mapDispatchToProps=(dispatch)=>{
    return {
        removeQuote: (id)=>dispatch(removeQuote(id)),
        downvoteQuote: (id)=>dispatch(downvoteQuote(id)),
        upvoteQuote: (id)=>dispatch(upvoteQuote(id))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Quotes);
