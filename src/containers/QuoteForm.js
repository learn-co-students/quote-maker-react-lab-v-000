import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: '',
    votes: 0
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
/**
  handleOnChange = event => {
    // Handle Updating Component State

    if (event.target.type === 'textarea') {
      this.setState({
        content: event.target.value
      });
    } else {
      this.setState({
        author: event.target.value
      });
    }// end if

  } **/

  handleOnSubmit = event => {
  event.preventDefault();
  const quote = {...this.state, id: uuid() };
  this.props.addQuote(quote);
  this.setState({
    content: '',
    author: ''
  });
}

/**

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();
    //this.props.addRestaurant(this.state)
    // Create quote object from state
    this.props.addQuote(this.state)
    // Pass quote object to action creator
    // Update component state to return to default state
    this.state = {
      content: '',
      author: '',
      //id: uuid()
    }
  }
**/
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
                        className="form-control"
                        onChange={(event) => this.handleOnChange(event)}
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
                        onChange={(event) => this.handleOnChange(event)}
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
export default connect(state => ({ quotes: state.quote }), { addQuote })(QuoteForm);
//export default connect()(QuoteForm);
