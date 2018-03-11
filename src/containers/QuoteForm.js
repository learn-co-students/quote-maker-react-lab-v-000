import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';//will bind our actions in quotes to the state

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "",
      content: ""
    }
  }

  handleOnChange = (event) => {
  this.setState({
      [event.target.name]: event.target.value })

  }

  handleOnSubmit = event => {
    event.preventDefault();// Handle Form Submit event default
    const quote = Object.assign({},this.state,{id: uuid(),votes:0});// Create quote object from state
    this.props.addQuote(quote)  // Pass quote object to action creator
    this.setState({
      author: '',
      content:''})// Update component state to return to default state

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
                      <textarea name="content"
                        className="form-control"
                        value={this.state.content} onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name="author" onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                        <br/> Written By <b>{this.state.author}</b>
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
     },dispatch);
}

export default connect(null, mapDispatchToProps)(QuoteForm);
