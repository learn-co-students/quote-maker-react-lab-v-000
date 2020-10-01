import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  state = { //local state 
    content: '', 
    author: '',
  }

  handleOnChange = event => {
    const { value, name } = event.target //reaches into event object and assigns the values to keys in const objext
    this.setState({
      [name]: value //assigns the value of the field to the name of the field
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault(); //default tries to send an automatic post request 
    // Create quote object from state
    const quote = {...this.state, id: uuid(), votes: 0} //{...this.state} (local state) gives you whatever the current value of content and author
    // Pass quote object to action creator
    this.props.addQuote(quote) //calling it and hand it the payload (quote in this case)
    //add quote to quotes array in state
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
                <form className="form-horizontal" onSubmit={ (event) => this.handleOnSubmit(event) }>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        onChange={this.handleOnChange}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        type="text"
                        className="form-control"
                        onChange={this.handleOnChange}
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
export default connect(null, { addQuote })(QuoteForm); // you give it whatever (action object) you want it to map to dispatch 
