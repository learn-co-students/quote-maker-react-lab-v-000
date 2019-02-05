import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
// we import the addQuote action creator that will be invoked within a dispatch call with the help of the connect
// any action creators (actions) we might want to invoke within this component should be imported here

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    // id: uuid() we dont want id to generate a single time as default
    content: '',
    author: '',
    votes: 0
   }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    //wait to generate the id until the quote is actually created with content 
    
    this.props.addQuote({...this.state, id: uuid()})
    //debugger
    // we've created quote with form data(state) now. 
    // now we'll want to reset the state so the form shows empty input fields again
    // aka blank slate
    
    this.setState({
      content: '',
      author: ''
    })
    

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
// I don't think we need to pass any state to props because quoteform has no children
// we do need to pass action creators to props so that it is available here, within quote form. 
// specifically, because this component needs to create a quote, we pass it that action creator. now every time connect is called,
// we have this action availble that we can dispatch 
export default connect(null, { addQuote })(QuoteForm);

