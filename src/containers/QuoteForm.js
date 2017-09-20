import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }

  handleOnChange(event) {
    // Handle Updating Component State
    if (event.target.name === "author") {
      this.setState({
        author: event.target.value
      });
    } else {
      this.setState({
        content: event.target.value
      })
    }
  }

  handleOnSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state 
    const newQuote = {
      content: this.state.content,
      author: this.state.author,
      votes: 0,
      id: uuid()
    }
    // Pass quote object to action creator 
    this.props.addQuote(newQuote);
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
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea 
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote,
  }, dispatch);
} 

export default connect(null, {mapDispatchToProps})(QuoteForm);