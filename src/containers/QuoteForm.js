import React, { Component } from 'react';
import uuid from 'uuid';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  constructor(props) {
    super(props)
      //set up a controlled form with internal state
    this.state = {
      content: '',
      author: ''
    }

  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()

    // Create quote object from state
    
    const quote = {
      author: this.state.author, 
      content: this.state.content, 
      votes: 0, 
      id: uuid()}
    
    // Pass quote object to action creator
    this.props.addQuote(quote)
    
    // Update component state to return to default state
    this.setState({ author: '', content: '' })

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
                        name='content'
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
                        name='author'
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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
};

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
