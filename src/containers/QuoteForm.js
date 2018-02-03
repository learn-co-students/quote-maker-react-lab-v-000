import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import uuid from 'uuid';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      content: ''
    }
  };

  handleAuthorOnChange(event) {
    // Handle Updating Component State
    this.setState({
      author: event.target.value
    })
  };

  handleContentOnChange(event) {
    this.setState({
      content: event.target.value
    })
  };

  handleOnSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = Object.assign({}, this.sstate, {id: uuid()})
    // Pass quote object to action creator
    this.props.addQuote(quote);
    // Update component state to return to default state
    this.setState({
      author: '',
      content: ''
    })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit.bind(this)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleContentOnChange.bind(this)}
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
                        value={this.state.author}
                        onChange={this.handleAuthorOnChange.bind(this)}
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

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: addQuote
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
