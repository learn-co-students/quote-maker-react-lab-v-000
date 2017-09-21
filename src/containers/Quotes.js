import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from  '../actions/quotes'
import { upvoteQuote } from  '../actions/quotes'
import { downvoteQuote } from  '../actions/quotes'
import { bindActionCreators } from 'redux';

class Quotes extends Component {

  handleUpVote = id => {
    this.props.upvoteQuote(id);
  }

  handleDownVote = id => {
    this.props.downvoteQuote(id);
  }

  handleRemoveQuote = id => {
    this.props.removeQuote(id);
  }


  render() {
    const quotes = this.props.quotes.map((quote, index) =>
      <QuoteCard key={index} quote={quote} upVote={this.props.upvoteQuote} downVote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>
    )
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
                //TODO: 
                quotes
                
               // Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {quotes: state.quotes};
}


const mapDispatchToProps = (dispatch) => {
  /* code change */
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote },
     dispatch);
};
 

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);