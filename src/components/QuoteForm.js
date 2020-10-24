import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/Quotes';

class QuoteForm extends Component {

  constructor () {
    super();
    this.state = {
        formControls: {
            id: {
              value: ''
            },
            content: {
              value: ''
            },
            author: {
              value: ''
            }
        }
    }
  
}

  handleOnChange = event => {
      
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
      formControls: {
          ...this.state.formControls,
          [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
}

  handleOnSubmit = event => {
    event.preventDefault();

    const id = uuid();
    const name = event.target.name;


    // Create quote object from state
    // Pass quote object to action creator

    this.setState({
      [name]: '',
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
                        className="form-control"
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

const mapDispatchToProps = dispatch => ({
  addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData }),
  removeQuote: formData => dispatch({ type: 'REMOVE_QUOTE', payload: formData }),
  upvoteQuote: formData => dispatch({ type: 'UPVOTE_QUOTE', payload: formData }),
  downvoteQuote: formData => dispatch({ type: 'DOWNVOTE_QUOTE', payload: formData })
})

export default connect(null, mapDispatchToProps)(QuoteForm);
