import React from 'react';
import { connect } from 'react-redux';
import {
  removeQuote,
  upvoteQuote,
  downvoteQuote
} from '../actions/quotes';
import { bindActionCreators } from 'redux';

const QuoteCard = (props) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer><cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={downvoteQuote(props.quote.id)}
          >
            Upvote
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={upvoteQuote(props.quote.id)}
          >
            Downvote
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={removeQuote(props.quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;



export default QuoteCard;