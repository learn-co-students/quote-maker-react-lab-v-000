import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    // console.log(this.props.quotes);
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
              {this.props.quotes.map((quote, index) => {
              return <QuoteCard 
                quote={quote} 
                key={index} 
                upvote={(id) => this.props.upvoteQuote(id)} 
                downvote={(id) => this.props.downvoteQuote(id)} 
                />})}
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

const mapStateToProps = state => ({ quotes: state.quotes })

const mapDispatchToProps = {
  upvoteQuote,
  downvoteQuote
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
