import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {
  // set up a controlled form with internal state. Setting initial state. Form's textarea & input are initially blank, hence empty string values
  state = {
    content: '',
    author: ''
  }
  // Handle Updating Component State
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault() // prevent default form submit action, prevent redirecting
    const quote = { ...this.state, id: uuid() }; // create quote object from state, generate ID, initial votes value comes from action creator addQuote
    this.props.addQuote(quote)
    this.setState({ content: '', author: '' }) // Update component state to return to default state (clear form)
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
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

/*
// Passing an object containing an action creator function value as the 2nd argument to connect() function automatically does this:
// function mapDispatchToProps(dispatch, quoteObject) {
//  return {
//    addQuote: (quoteObject) => dispatch(addQuote(quoteObject))
//  }
// }
*/

export default connect(null, { addQuote })(QuoteForm);
