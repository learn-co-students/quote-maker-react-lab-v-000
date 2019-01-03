import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state =
    //set up a controlled form with internal state
    {content: "",
    author: ""}


  handleOnChange = event => {

    // Handle Updating Component State
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });


  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = {...this.state, id: uuid() };
    // Pass quote object to action creator
    this.props.addQuote(quote);
    // Update component state to return to default state
    this.setState({
      content: "",
      author: ""
    })
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
                        name="content"
                        type="text"
                        onChange={(event) => this.handleOnChange(event)}
                        className="form-control"
                        id="content"
                        value={this.state.content}
                        placeholder="add quote"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={(event) => this.handleOnChange(event)}
                        name="author"
                        className="form-control"
                        id="author"
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
export default connect(null, { addQuote })(QuoteForm);
