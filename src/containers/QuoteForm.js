import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: [],
    author: [],
    votes: 0
    //set up a controlled form with internal state
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };
    // Handle Updating Component State

  handleOnSubmit = event => {
    event.preventDefault();
    let quote = {...this.state, id: uuid()}
    this.props.addQuote(quote)
    this.setState({
      content: [],
      author: []
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }
/*NOTES:
The dispatch function is sent to props automatically with the action constructor as an argument, with the quote as an argument.
AKA: dispatch(addQuote(quote))
addQuote(quote) is calling the action constructor. The action object is going to dispatch at the bottom of the file.
Dispatch(action) => Reducer(state, action) => New State => New Props
After the form is submitted, the state goes back to default and then
*/
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit}  className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        id="content"
                        onChange={this.handleOnChange}  className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        id="author"
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
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
export default connect(null, {addQuote} )(QuoteForm);

//{addQuote} = addQuote: addQuote object
//Dispatch is automatically included in the 2nd argument, and if you pass the object in the action creator, then those parameters immediately show up here. (Does that mean 'type' is also a parameter??)
