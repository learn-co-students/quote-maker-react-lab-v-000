import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux'

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }

  handleOnChange = event => {
    // Handle Updating Component State
  }

  //   handleSubmit(event){
  //   event.preventDefault()
  //   this.props.addQuote(this.state)
  // }

  handleOnSubmit = event => {
    event.preventDefault()
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
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <form onSubmit={(event)=> this.handleSubmit}>
                        <textarea name="content"
                          className="form-control"
                          value={this.state.content}
                        />
                        <input type="text" name="author"/>  
                        <button>Submit</button>
                      </form>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control"
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

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
}

export default connect(null, {mapDispatchToProps})(QuoteForm);
