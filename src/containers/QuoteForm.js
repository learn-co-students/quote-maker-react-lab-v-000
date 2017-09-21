import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

const initialState = {
      content: '',
      author: '',
    }

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    
    this.state = initialState
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state 
    // Pass quote object to action creator 
    // Update component state to return to default state
    event.preventDefault();
    this.props.addQuote(this.state)
    this.setState(initialState)
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
                        className="form-control"
                        onChange={this.handleOnChange}
                        name="content"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control"
                        onChange={this.handleOnChange}
                        name="author"
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

export default connect(null, {})(QuoteForm);