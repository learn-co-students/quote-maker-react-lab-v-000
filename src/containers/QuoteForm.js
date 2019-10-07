import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class QuoteForm extends Component {

  state = {
    id: uuid(),
    content: "",
    author: ""
  }

  handleOnChange = event => {
    const {value, name} = event.target
    this.setState({
      [name]: value
       // text: event.target.value
     });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    let quote = {...this.state, id:uuid()}
    this.props.addQuote(quote)
    this.setState({
      content: "",
      author: ""})
    }
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state


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
                        className="form-control"
                        type="text"
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

const mapDispatchToProps = dispatch => ({
  addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData })
})
//add arguments to connect as needed
export default connect(null, {addQuote, removeQuote, upvoteQuote, downvoteQuote})(QuoteForm);
