import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    id: 0,
    content: '',
    author: '',
    votes: 0
  }

  handleOnChangeContent = event => {
    this.setState({
     content: event.target.value
    });
  };

  handleOnChangeAuthor = event => {
    this.setState({
      author: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_QUOTE',
      quote: this.state
    });
    this.setState({
      content: '',
      author: ''
    });
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
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
                        name="content"
                        className="form-control"
                        onChange={this.handleOnChangeContent}
                        value={this.state.content}
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
                        onChange={this.handleOnChangeAuthor}
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
export default connect()(QuoteForm);
