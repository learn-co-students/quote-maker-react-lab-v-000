 The  Lab FLOW
   We start out with  APP.js. Where we render  and import  QUoteForm and Quotes.

    
    QuoteForm
     we create an empty state for what we need to handle. in this case.  


       Where we have all the forms and Including the input Nodes combined with  the necessary handlers .  I.e

  
  state = {
    //set up a controlled form with internal state
    
    content: '',
    author: ''
  
  }
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name = "author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={(event) => this.authorhandleOnChange(event)}
                      
                      />

        Then create the need functions as I.e  HandelOnChange and  HandleOnSubmit...  This are all important. 
      Specificly in the handleOnSubmit we have an action in there for addQuote and adding an ID for each quote created.  Something like this. 

   handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    const quote = {
       ...this.state, id: uuid()
    }
    
    this.props.addQuote(quote);
    this.setState({
      content: '',
      author: ''
    })
  };

           In here alsso, we IMPORT THE CONNECT METHODS FROM RRACT-REDUX [so our QuoteForm can add to the store]

    ACTIONS>  Is next
     
      Inclused all the differenct types of actions need for the App.. it almost like a mail truck... each quote with an ID has some type of action attached to it... 

       
       then it moves it all to the Reducers. 


       THE REDUCER. 
        The Brains for the operation... KIND OF.

     So all the  ACTION TYPEs from the Action files are brought here to be worked on.  
      so it take in the State, and an ACTION thats is paired with...   Using a SWTICH CASE method this time
       And  what needed to happen for each case is coded in.
       And it returns the state.


       <!-- IT all in the store.    -->


       Then To DISPLAY  IT 
        We need acces to the Stores and the States in them

         
         in  Containers/ QUotes.

          we Do a CONNECT  in there and Import all the  { upvoteQuote, downvoteQuote, removeQuote } from the actions
          and we add the  [mapStateToProps]  = turning all the state in  store to Props so we can use it as components  like props. 



    As we have Access to Props. we use it in here, by saying.. Like below using render.


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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
                /* We have Props coming in here from quotes actions */
              
               this.props.quotes.map((quote) => {
              
                return( 
                 < QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}
                 removeQuote = { this.props.removeQuote }
                   />  
                     )
                    }
                  )
              }

              


            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

remenber thet is all connected to the Store at this point. AND will be delivred as PROPS>
. So to use it, we go to Components/ QUOTECARD. 
 
 USING PROPS in there, because we have access to all the state in the store now. we can do ...



const QuoteCard = (props) =>
  
 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
       
          
          {/* <p>{Render Quote Content}</p> */}
          <div>
            {props.quote.content}
          </div>

          <div>
          {props.quote.author}

NOTE: 
Using Props.quote.author and doing the same for content... As it available in the props.

          </div>
          

          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"



            className="btn btn-primary"

 NOTE: We added out Buttons in here so we can use it. 
  for upvote + downVote etc.          Then Linking it directly to our actions in combination to the Proper quote through quote.id through Props.    



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
     
             {/* <div>Votes: {Render Quote Votes}</div> */ 
             
             notes: we want it to show on the page.... So we do  props.quote.votes... inside   QUOTECARD

              props.quote.votes}

              Which then is displaied in APP.JS

    </div>
  </div>;



export default (QuoteCard);






 




