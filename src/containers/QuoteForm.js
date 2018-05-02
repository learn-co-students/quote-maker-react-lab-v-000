import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: '',
    }
  }

  handleAuthorOnChange = (event) => {
    this.setState({
      author: event.target.value
    })

  }

  handleContentOnChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state 
    const quote = Object.assign({}, this.state, { id: uuid() });
    // Pass quote object to action creator 
    this.props.addQuote(quote);
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea 
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleContentOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control"
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleAuthorOnChange}
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

export default connect(null, {addQuote})(QuoteForm);