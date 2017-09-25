import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import {bindActionCreators} from 'redux'

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "",
      content: ""
    }
  }

  handleOnAuthorChange(event){
    this.setState({
      author: event.target.value,
    })
  }

  handleOnChange(event){
    this.setState({
      content: event.target.value,
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.addQuote(this.state)
    this.setState({
      content: "",
      author: "",
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event)=> this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={(event) => this.handleOnAuthorChange(event)}
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

function mapStateToProps(state){
  return {content: state.content, author: state.author}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addQuote: addQuote
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);