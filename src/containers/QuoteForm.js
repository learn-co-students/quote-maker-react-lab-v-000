import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
   author: '',
   content: '',
   id: uuid()
  }

  handleOnChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = event => {
    // debugger
    // console.log(this)
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault()
    console.log(this)
    this.props.addQuote(this.state)
    debugger
    document.getElementsByClassName('container').html = ''
  }

  render() {
    console.log(this.state)
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
                        onChange={this.handleOnChange}
                        className="form-control" 
                        name='content'
                        // value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChange}
                        className="form-control"
                        type="text"
                        name='author'
                        // value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" onClick={this.handleOnSubmit} className="btn btn-default">Add</button>
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
const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch =>{
  return {
    addQuote: (quote) => {
      dispatch(addQuote(quote))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
