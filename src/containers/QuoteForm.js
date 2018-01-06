// import React, { Component } from 'react';
// import uuid from 'uuid';
// import { connect } from 'react-redux';
// import { addQuote } from '../actions/quotes';
import React from "react";
import { addQuote } from "../actions/quotes.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class QuoteForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { content: "", author: "" };
  }

  handleOnChange = event => {
    if(event.target.name === "content") this.setState({ content: event.target.value });
    if(event.target.name === "author")this.setState({ author: event.target.value });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuote(this.state);
    this.setState({ author: "", content: "" });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className='container-fluid'>
              <div className="panel panel-default">
                <div className="panel-body">
                  <form onSubmit={event => this.handleOnSubmit(event)} className="form-horizontal">
                    <div className="form-group">
                      <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                      <div className="col-md-12">
                        <textarea
                          name="content"
                          onChange={event=> this.handleOnChange(event)} 
                          className="form-control"
                          value={this.state.content}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="author" className="col-md-4 control-label">Author</label>
                      <div className="col-md-12">
                        <input
                          onChange={event=> this.handleOnChange(event)}
                          name="author" 
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addQuote: addQuote
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(QuoteForm);
