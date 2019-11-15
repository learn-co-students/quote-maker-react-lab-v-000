import React from 'react';
import quotes from '../containers/Quotes';


function handleOnUpVote (event){
  
  event.preventDefault();
  this.props.quote(this.props.upvoteQuote);
  // remeber each quots has an ID
};

const handleOnDownVote = (event) => {
  
  event.preventDefault();
  this.props.quote(this.props.downvoteQuote);
  
};
  

const QuoteCard = (props) =>
  
 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">

          {/* <p>{Render Quote Content}</p> */}
          <div>
            {props.quotes}
          </div>
          

          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button "

            className="btn btn-primary"
            onClick={(event) => this.handleOnUpVote(event)}

          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={(event) => this.handleDownVote(event)}


          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;



export default (QuoteCard);
