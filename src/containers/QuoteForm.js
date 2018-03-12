import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import {bindActionCreators} from 'redux'

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }

  handleContentChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleAuthorChange = event => {
    this.setState({
      author: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addQuote({
      id: uuid(),
      content: this.state.content,
      author: this.state.author
    })
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    //console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event)=>this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea 
                        onChange={(event)=> this.handleContentChange(event)}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        onChange={(event)=> this.handleAuthorChange(event)}
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

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
}

export default connect(mapStateToProps, {addQuote})(QuoteForm);

