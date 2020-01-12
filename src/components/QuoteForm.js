import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {


  state = {
    //set up a controlled form with internal state
    author: "",
    content: "",
    id: uuid()
  }

  handleOnChange = event => {

    if(event.target.type==="textarea"){
      this.setState({
        ...this.state,
        content: event.target.value
      })
    }else{

      this.setState({
        ...this.state,
        author: event.target.value
      })
    }
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    this.setState({
      ...this.state,
      id: uuid()
    })
    this.props.addQuote(this.state)
    this.setState({
      author: "",
      content: "",
      id: ""
    })



  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control" name="content"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default" onSubmit={(event) => this.handleOnSubmit(event)}>Add</button>
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

const mapDispatchToProps = dispatch => ({
  addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData })
})


export default connect(null, mapDispatchToProps)(QuoteForm);
