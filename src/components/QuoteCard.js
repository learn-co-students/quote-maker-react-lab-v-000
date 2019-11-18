import React from 'react';
import quotes from '../containers/Quotes';


  

const QuoteCard = (props) =>
  
 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* {console.log(props)} */}
          
          {/* <p>{Render Quote Content}</p> */}
          <div>
            {props.quote.content}
          </div>

          <div>
          {props.quote.author}

          </div>
          

          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button "

            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.quote.id)}
            //  we are assigning our upvote Quote+ downvote Quote and removeQuote...that is located
            // all in our Props...

          >
            Upvote
          </button>


          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.quote.id)}
            
              >
               Downvote
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.quote.id)}

          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
      </div>
     
             {/* <div>Votes: {Render Quote Votes}</div> */  props.quote.votes}

    </div>
  </div>;



export default (QuoteCard);
